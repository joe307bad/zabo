import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }


  @MessagePattern({ cmd: "ping" })
  ping(_: any) {
    console.log('pong from watcher ' + Date.now())
    return { "watcher": "response"};
  }
}
