// jokes.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ChuckNorrisService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) {}

  @Get('random')
  async getRandomJoke(): Promise<string> {
    const joke = await this.chuckNorrisService.getRandomJoke();
    return joke;
  }
}
