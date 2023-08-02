import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { JokesController } from './jokes/jokes.controller';
import { ChuckNorrisService } from './jokes/jokes.service';
import { WeatherController } from './openweathermap/weather.controller';
import { OpenWeatherMapService } from './openweathermap/weather.service';



@Module({
  imports: [PrismaModule, ArticlesModule, UsersModule, AuthModule, HttpModule],
  controllers: [AppController, JokesController, WeatherController],
  providers: [AppService, ChuckNorrisService, OpenWeatherMapService],
})
export class AppModule {}
