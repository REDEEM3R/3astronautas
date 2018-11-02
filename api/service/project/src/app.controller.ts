import { Get, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { pathToFileURL } from 'url';

@Controller('api/planetas')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  planetas(): string {
    return this.appService.planetas();
  }
}
