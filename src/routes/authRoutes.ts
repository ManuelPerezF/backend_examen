import express from 'express';
import { AuthController } from '../controller/authController';
import { AuthHandler } from '../handler/authHandler';
import { FakeService } from '../db/fake/fakeService';

const router = express.Router();

const fakeService = new FakeService();
const authController = new AuthController(fakeService);
const authHandler = new AuthHandler(authController);

router.post('/login', (req, res, next) => authHandler.login(req, res, next));


export default router;