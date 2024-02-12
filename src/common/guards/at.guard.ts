import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AtGuard extends AuthGuard('jwt') {

    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {

        const isPublic = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) return true;

        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
    
        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            let decoded;
            if (this.isAdmin(context)) {
                decoded = jwt.verify(token, process.env.AT_SECRET);
                return true;
            }  
            if (this.isClient(context)) {
                decoded = jwt.verify(token, process.env.AT_SECRET_CLIENT);
                return true;
            }
            // return true ni olsam permision decorator berilmagan so'rovlarda 401 qaytadi
            return true   
            throw new UnauthorizedException()
        } catch (e) {
            throw new UnauthorizedException()
        }
    }
    
    private isAdmin(context: ExecutionContext): boolean {
        return this.reflector.get<string[]>('permissions_admin', context.getHandler())?.length > 0 ?? false;
    }
    
    private isClient(context: ExecutionContext): boolean {
        return this.reflector.get<string[]>('permissions_client', context.getHandler())?.length > 0 ?? false;
    }
    
    
}