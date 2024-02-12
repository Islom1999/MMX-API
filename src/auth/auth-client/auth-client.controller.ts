import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthClientService } from './auth-client.service';
import { Public, Tokens } from 'src/common';
import { AuthClientDto } from './dto/auth-client.dto';

@Controller('auth-client')
export class AuthClientController {
    constructor(private _service: AuthClientService){}


    @Public()
    @Post('signin/local')
    @HttpCode(HttpStatus.OK)
    signinLocal(@Body() dto: AuthClientDto): Promise<Tokens> {
        return this._service.signinLocal(dto);
    }
}
