import { Response } from 'express';
import { responseStatuses } from '../models/common-models';

export function successResponse(message: string, data: any, res: Response) {
    res.status(responseStatuses.success).json({
        status: 'success',
        message: message,
        data
    });
}

export function failureResponse(message: string, data: any, res: Response) {
    res.status(responseStatuses.badRequest).json({
        status: 'failure',
        message: message,
        data
    });
}

export function insufficientParameters(res: Response) {
    res.status(responseStatuses.badRequest).json({
        status: 'failure',
        message: 'Insufficient parameters',
        data: {}
    });
}

export function mongoError(err: any, res: Response) {
    res.status(responseStatuses.serverError).json({
        status: 'failure',
        message: 'MongoDB error',
        data: err
    });
}