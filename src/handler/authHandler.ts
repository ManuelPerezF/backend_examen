import { AuthController } from "../controller/authController";
import { Request, Response, NextFunction } from "express";

export class AuthHandler { 
    authController: AuthController;

    constructor(authController: AuthController) {
        this.authController = authController;
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, password } = req.body;

            const employee = await this.authController.login(username, password);

            if (employee) {
                res.status(200).json({
                    message: 'Inicio de sesión exitoso.',
                    employee: {
                        name: employee.name,
                        email: employee.email,
                    },
                });
            } 
            else {
                res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}