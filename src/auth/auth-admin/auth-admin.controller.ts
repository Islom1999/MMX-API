import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { GetCurrentUser, GetCurrentUserId, Public, RtGuard, Tokens } from 'src/common';
import { AuthAdminService } from './auth-admin.service';
import { AuthAdminDto } from './dto/auth-admin.dto';

@Controller('auth')
export class AuthAdminController {

    constructor(private _service: AuthAdminService){}

    @Public()
    @Post('signup/local')
    @HttpCode(HttpStatus.CREATED)
    signupLocal(@Body() dto: AuthAdminDto): Promise<Tokens> {
        return this._service.signupLocal(dto);
    }

    @Public()
    @Post('signin/local')
    @HttpCode(HttpStatus.OK)
    signinLocal(@Body() dto: AuthAdminDto): Promise<Tokens> {
        return this._service.signinLocal(dto);
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserId() userId: string): Promise<boolean> {
        return this._service.logout(userId);
    }

    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
        @GetCurrentUserId() userId: string,
        @GetCurrentUser('refreshToken') refreshToken: string,
    ): Promise<Tokens> {
        return this._service.refreshTokens(userId, refreshToken);
    }
}
