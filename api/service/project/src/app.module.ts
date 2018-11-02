import { Module } from '@nestjs/common';
import { PlanetasController } from './planetas/planetas.controller';
import { PlanetasService } from './planetas/planetas.service';

@Module({
  imports: [],
  controllers: [PlanetasController],
  providers: [PlanetasService],
})
export class AppModule {}