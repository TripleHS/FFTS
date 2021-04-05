import {
  Controller,
  Get,
  Post,
  Redirect,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Redirect('api', 301)
  index() {
    return 'ok';
  }

  @Post('/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
}
