import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NEW_NAME_SERVICE') private client: ClientProxy) {}

  @Get('sum/:num1/:num2/:num3')
  sumNumber(
    @Param('num1') num1: string,
    @Param('num2') num2: string,
    @Param('num3') num3: string,
  ) {
    const res = [Number(num1), Number(num2), Number(num3)];

    const pattern = { cmd: 'sum1' };

    const result = this.client.send<number>(pattern, res);

    return result;
  }
}
