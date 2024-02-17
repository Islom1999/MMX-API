import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
    catch(exception: QueryFailedError | EntityNotFoundError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';

        console.log(exception.message);
        

        if (exception instanceof QueryFailedError) {
            const queryError = exception as QueryFailedError & { code?: string };

            if (queryError.code === '23505') {
                // Noyoblik buzilishi (PostgreSQL uchun)
                status = HttpStatus.BAD_REQUEST;
                message = 'Duplicate entry error';
            } else {
                // Boshqa ma'lumotlar bazasi xatolari
                status = HttpStatus.BAD_REQUEST;
                message = 'Database query error';
            }

        }else if (exception instanceof EntityNotFoundError) {
            // Serverdan malumot topilmadi
            status = HttpStatus.NOT_FOUND;
            message = 'The requested resource was not found';
        }
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message
        });
    }
}
