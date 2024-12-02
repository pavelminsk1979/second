import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sum(num1: string, num2: string, num3: string) {
    return [Number(num1), Number(num2), Number(num3)];
  }
}
