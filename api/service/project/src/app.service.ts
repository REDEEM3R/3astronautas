import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';

@Injectable()
export class AppService {
  root(): string {
    return 'Planeta visitado';
  }

  planetas(): string {
    const json = require('../../../estacion/planetas.json');
    return json;
  }
}
