// openweathermap.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenWeatherMapService {
  private readonly apiKey = '3b5155f84c04ba3fb8fac64123c61cc3';
  private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  async getWeather(city: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          q : city,
          appid: this.apiKey,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data.');
    }
  }
}
