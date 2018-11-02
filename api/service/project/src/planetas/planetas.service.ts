import { Injectable } from '@nestjs/common';
import { Control } from './planetas.interface';

@Injectable()
export class PlanetasService {
//   private readonly items: Control[] = ['Pizza', 'Coke'];

  private json = require('../planetas.json');

  getPlanetas(): Control[] {
    return this.json;
  }
}