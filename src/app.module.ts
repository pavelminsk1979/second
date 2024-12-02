import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NEW_NAME_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://olbqasdy:cBx2x02ArvGFnxwmBDm8-Fr-F2VnDrzK@sparrow.rmq.cloudamqp.com/olbqasdy',
          ],
          queue: 'cats_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
