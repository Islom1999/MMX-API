import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import {
  IRoleData,
  JwtPayload,
  PermissionAdmin,
  RoleTypeAdmin,
  Tokens,
} from 'src/common';
import { AuthAdminDto } from './dto/auth-admin.dto';
import { RoleAdmin, UserAdmin } from 'src/entity/entity_admin';

@Injectable()
export class AuthAdminService {
  salt = 10

  constructor(
    @InjectRepository(UserAdmin)
    private _userRepo: Repository<UserAdmin>,
    @InjectRepository(RoleAdmin)
    private _roleRepo: Repository<RoleAdmin>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async signupLocal(dto: AuthAdminDto): Promise<Tokens> {
    const userCount = await this._userRepo.count();
    const hash = await bcrypt.hash(dto.password, this.salt);

    const _role = await this.addRole(
      userCount == 0 ? RoleTypeAdmin.SUPER_ADMIN : RoleTypeAdmin.BASE_USER,
    );
    let newUser = await this._userRepo.create({
      email: dto.email,
      hash,
      role_id: _role.id,
      name: dto.name,
    });
    newUser = await this._userRepo.save(newUser);

    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash(newUser.id, tokens.refresh_token);

    return tokens;
  }

  async signinLocal(dto: AuthAdminDto): Promise<Tokens> {
    const user = await this._userRepo.findOne({
      where: {
        email: dto.email,
      },
      relations: {
        role: true,
      },
    });

    if (!user)
      throw new HttpException('Access Denied', HttpStatus.UNAUTHORIZED);

    const passwordMatches = await bcrypt.compare(dto.password, user.hash);
    if (!passwordMatches)
      throw new HttpException('Access Denied', HttpStatus.UNAUTHORIZED);

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string): Promise<boolean> {
    await this._userRepo
      .createQueryBuilder()
      .update()
      .set({ hashed_rt: null })
      .where('id = :id', { id: userId })
      .andWhere('hashed_rt IS NOT NULL')
      .execute();
    return true;
  }

  async refreshTokens(userId: string, rt: string): Promise<Tokens> {
    const user = await this._userRepo.findOne({
      where: {
        id: userId,
      },
      relations: {
        role: true,
      },
    });
    
    if (!user || !user.hashed_rt) throw new HttpException('Access Denied', HttpStatus.UNAUTHORIZED);

    const rtMatches = await bcrypt.compare(rt, user.hashed_rt);
    if (!rtMatches) throw new HttpException('Access Denied', HttpStatus.UNAUTHORIZED);

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  // FUNCTIONS
  private async updateRtHash(
    userId: string,
    rt: string | undefined,
  ): Promise<void> {
    const hash = await bcrypt.hash(rt, this.salt);

    await this._userRepo.update(userId, { hashed_rt: hash });
  }

  private async getTokens(userId: string, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET'),
        expiresIn: this.config.get<string>('AT_EXPIRES_IN'),
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET'),
        expiresIn: this.config.get<string>('RT_EXPIRES_IN'),
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  private async addRole(roleType: RoleTypeAdmin): Promise<RoleAdmin> {
    try {
      const RoleAdminBaseData: IRoleData = {
        name: RoleTypeAdmin.BASE_USER || 'BaseUser',
        permissions: [PermissionAdmin.VIEW],
      };
      const RoleAdminSuperData: IRoleData = {
        name: RoleTypeAdmin.SUPER_ADMIN || 'SuperAdmin',
        permissions: Object.values(PermissionAdmin),
      };

      let newRole: RoleAdmin | IRoleData | any = await this._roleRepo.findOne({
        where: { name: roleType },
      });

      if (!newRole) {
        const roleDto =
          roleType === RoleTypeAdmin.SUPER_ADMIN
            ? RoleAdminSuperData
            : RoleAdminBaseData;
        await this._roleRepo.create(roleDto as RoleAdmin);
        newRole = await this._roleRepo.save(roleDto as RoleAdmin);
      }

      return newRole;
    } catch (error) {
      console.log(error);
    }
  }
}
