import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  uuid: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  lastname: string;
}
