// chuck-norris.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChuckNorrisService {
  private readonly apiUrl = 'https://api.chucknorris.io/jokes/random';

  async getRandomJoke(): Promise<string> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data.value;
    } catch (error) {
      throw new Error('Failed to fetch Chuck Norris joke.');
    }
  }
}
