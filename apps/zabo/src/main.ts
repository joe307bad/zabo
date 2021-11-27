/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, NatsOptions, Transport } from '@nestjs/microservices';

export const natsConfig: NatsOptions = {
  transport: Transport.NATS,
  options: {
    url: process.env.NATS_URL || 'nats://localhost:4222',
  },
};
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.connectMicroservice(natsConfig);
//
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3333;
//
//   app.enableVersioning({
//     type: VersioningType.URI,
//   });
//   await app.startAllMicroservices();
//   await app.listen(port, () => {
//     Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
//   });
// }
//
// bootstrap();
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://0.0.0.0:4222'],
      }
    },
  );
  app.listen();
}
bootstrap();
