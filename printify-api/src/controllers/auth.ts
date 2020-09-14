import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import { default as User } from "../models/user";

class AuthController {
    static register = async (req: Request, res: Response) => {
        const data = req.body
        try {
            const user: any = new User(data);
            await user.save();

            const token = user.getJWT();

            return res.status(201).json({ user, token });
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: err.message || err });
        }
    }
    static login = async (req: Request, res: Response) => {
        let { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send({
                message: "Bad request"
            });
        }

        let user: any;
        try {
            user = await User.findOne({ email });
        } catch (error) {
            return res.status(401).send({
                message: "Unauthorized"
            });
        }

        if (!user || !user.validPassword(password)) {

            return res.status(401).send({
                message: "Unauthorized"
            });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.ACCESS_TOKEN_SIGNATURE_KEY,
            { expiresIn: "1h" }
        );

        return res.send({ user, token });
    };

    static changePassword = async (req: Request, res: Response) => {

        const id = res.locals.jwtPayload.userId;

        const { oldPassword, newPassword } = req.body;
        if (!(oldPassword && newPassword)) {
            res.status(400).json({
                message: "Bad requesy"
            });
        }

        let user: any;
        try {
            user = await User.findById(id);
        } catch (err) {
            res.status(401).send({
                message: "Unauthorized"
            });
        }

        if (!user || !user.validPassword(oldPassword)) {

            return res.status(401).send({
                message: "Unauthorized"
            });
        }


        user.hashPassword();
        await user.save(user);

        res.status(204).json(user);
    };

    static me = async (req: Request, res: Response) => {
        let user: any;
        try {
            const { userId } = res.locals.jwtPayload;
            user = await User.findById(userId);
            return res.json(user);
        } catch (err) {
            res.status(401).send({
                message: "Unauthorized"
            });
        }
    };
}
export default AuthController;