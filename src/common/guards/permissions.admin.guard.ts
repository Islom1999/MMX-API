import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { UserAdmin } from 'src/entity/entity_admin';

@Injectable()
export class PermissionsAdminGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectRepository(UserAdmin)
    private _userRepo: Repository<UserAdmin>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permissions =
      this.reflector.getAllAndOverride<string[]>('permissions_admin', [
        context.getHandler(),
        context.getClass(),
      ]) || [];

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
        throw new UnauthorizedException();
    }

    try {
        let token_user = jwt.verify(token, process.env.AT_SECRET);

        const user = await this._userRepo.findOne({
          where: { id: token_user.sub as string },
          relations: {
            role: true,
          },
        });
    
        if (user?.is_block) throw new UnauthorizedException();
        if (!this.validateRoles(permissions, user?.role?.permissions)) throw new UnauthorizedException();

        return true;
    } catch (error) {
        throw new UnauthorizedException();
    }
  }

  private validateRoles(
    allowedRoles: string[],
    userRoles: string[] = [],
  ): boolean {
    return allowedRoles.some((role) => userRoles.includes(role));
  }
}
