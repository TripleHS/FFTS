import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Redirect('https://far-from-the-stretcher.herokuapp.com/api', 301)
  index() {
    return 'ok';
  }
}
