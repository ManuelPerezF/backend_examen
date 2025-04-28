import { AuthController } from "../controller/authController";
import { Request, Response, NextFunction } from "express";

export class AuthHandler { 
    authController: AuthController;

    constructor(authController: AuthController) {
        this.authController = authController;
    }

    async login(req: Request, res: Response, next: NextFunction) {
        
    }


}