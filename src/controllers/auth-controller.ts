import { Request, Response } from 'express';
import AuthService from '../services/auth-service';
import * as responses from '../services/response-service'


export class AuthController {
    private authService: AuthService = new AuthService();

    public async signup(req: Request, res: Response) {
        this.authService.createUser(req, (err: any, data: any) => {
            if (err) {
                responses.mongoError(err, res);
            } else {
                responses.successResponse('user created successfully', data, res);
            }
        });
    }
    public login(req: Request, res: Response) {
        this.authService.login(req, (err: any, data: any) => {
            if (err) {
                responses.mongoError(err, res);
            } else {
                responses.successResponse('user logged in successfully', data, res);
            }
        });
    }
    public logout(req: Request, res: Response) {
        this.authService.logout(req, (err: any, data: any) => {
            if (err) {
                responses.mongoError(err, res);
            } else {
                responses.successResponse('user logged out successfully', data, res);
            }
        });
    }

}