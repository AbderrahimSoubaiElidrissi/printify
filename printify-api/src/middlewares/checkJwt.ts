import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    let token = <string>req.headers["x-access-token"] || <string>req.headers['authorization'];

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, process.env.ACCESS_TOKEN_SIGNATURE_KEY);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        res.status(401).send();
        return;
    }

    const { userId, email } = jwtPayload;
    const newToken = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN_SIGNATURE_KEY, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);

    next();
};