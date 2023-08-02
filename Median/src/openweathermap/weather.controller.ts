// weather.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { OpenWeatherMapService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly openWeatherMapService: OpenWeatherMapService) {}

  @Get(':city')
  async getWeather(@Param('city') city: string) {
    const weatherData = await this.openWeatherMapService.getWeather(city);
    return weatherData;
  }
}
