import { Injectable } from '@nestjs/common';
import { response } from 'express';
import {HttpService} from '@nestjs/axios'
import { map } from 'rxjs';


@Injectable()
export class AppService {
  private readonly apiUrl = 'https://api.chucknorris.io/jokes/random';

  private data = {
    smitpatel24680: {
      Hobby: "Chess_Swimming",
      Study: "CS"
    },
    nityachauhan: {
      Hobby: "Chess_Swimming",
      Study: "MBBS"
    },
  }


  constructor(private httpService: HttpService){}

  getUser(params) {

    return this.httpService
      .get(`http://api.github.com/users/${params.username}`)
      .pipe(
        map((response) => response.data),
        map((data) => ({
          ...this.data[params.username],
          githubFollowers: data.followers,
          location: data.location,
          bio: data.bio,
          publicRepos: data.public_repos,
        }))
      )
    
  }



  
}
