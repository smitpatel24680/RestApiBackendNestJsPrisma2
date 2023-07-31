//src/auth/entity/auth.entity.ts
import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  accessToken: string;
}
//define a new AuthEntity that will describe the shape of the JWT payload