import { Injectable, Inject, OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AppService implements OnApplicationBootstrap{
  constructor(
    @Inject("SERVICE_A") private readonly clientServiceA: ClientProxy
  ) {}

  pingServiceA() {
    const startTs = Date.now();
    const pattern = { cmd: "ping" };
    const payload = {};
    return this.clientServiceA
      .send<string>(pattern, payload)
  }

  async onApplicationBootstrap(): Promise<any> {
    await this.clientServiceA.connect();
    //setInterval(() => {
      //const startTs = Date.now();
      const b = await this.clientServiceA.send<string>({ cmd: "ping" }, {})
      b.subscribe((m) => console.log(m));
      //return b;
    //}, 500)
  }
}
