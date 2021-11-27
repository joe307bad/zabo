import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class AppController {
  @MessagePattern({ cmd: "ping" })
  ping(_: any) {
    console.log('pong from backups ' + Date.now())
    return { "backups": "response"};
  }
}
