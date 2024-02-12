import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleClient } from 'src/entity/entity_admin/role_client';
import { UserClient } from 'src/entity/entity_admin/user_client';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload, Tokens } from 'src/common';
import { AuthClientDto } from './dto/auth-client.dto';

@Injectable()
export class AuthClientService {
  salt = 10;
  constructor(
    @InjectRepository(UserClient)
    private _userRepo: Repository<UserClient>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async signinLocal(dto: AuthClientDto): Promise<Tokens> {
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
        secret: this.config.get<string>('AT_SECRET_CLIENT'),
        expiresIn: this.config.get<string>('AT_EXPIRES_IN_CLIENT'),
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET_CLIENT'),
        expiresIn: this.config.get<string>('RT_EXPIRES_IN_CLIENT'),
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
