import {
    Get,
    Post,
    Body,
    Controller,
  } from '@nestjs/common';

import { PlanetasService } from './planetas.service';
import { Control } from './planetas.interface';

@Controller('planetas')
  export class PlanetasController {

    constructor( private readonly planetasService: PlanetasService ) {}

    @Get()
    async getPlanetas(): Promise< Control []> {
      return this.planetasService.getPlanetas();
    }
    // @Post()
    // async create(@Body() planetas: string) {
    //     this.planetasService.create(planetas);
    //   }
  }