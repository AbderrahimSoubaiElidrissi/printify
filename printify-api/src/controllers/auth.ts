import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import { default as User } from "../models/user";

class AuthController {
    static register = async (req: Request, res: Response) => {

        try {
            const user: any = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            await user.save();

            const token = user.getJWT();

            return res.status(201).json({ data: { user, token } });
        } catch (err) {
            //return error if user unique field already exists
            if (err.name === "MongoError" && err.code === 11000) {
                let field = Object.keys(err.keyValue)[0];
                const response = {
                    message: `${field} already exists!`,
                    field: field
                };
                return res.status(422).json(response);
            }

            return res.status(409).json({ message: "error saving data" });
        }
    }
    static login = async (req: Request, res: Response) => {
        let { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send();
        }

        let user: any;
        try {
            user = await User.findOne({ email });
        } catch (error) {
            res.status(401).send();
        }

        if (!user.validPassword(password)) {
            res.status(401).send();
            return;
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.ACCESS_TOKEN_SIGNATURE_KEY,
            { expiresIn: "1h" }
        );

        res.send(token);
    };

    static changePassword = async (req: Request, res: Response) => {

        const id = res.locals.jwtPayload.userId;

        const { oldPassword, newPassword } = req.body;
        if (!(oldPassword && newPassword)) {
            res.status(400).send();
        }

        let user: any;
        try {
            user = await User.findById(id);
        } catch (err) {
            res.status(401).send();
        }

        if (!user.validPassword(oldPassword)) {
            res.status(401).send();
            return;
        }


        user.hashPassword();
        await user.save(user);

        res.status(204).send();
    };
}
export default AuthController;