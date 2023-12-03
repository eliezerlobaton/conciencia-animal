import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {

  @IsString()
  name: string

  @IsString()
  identity: string

  @IsEmail()
  email: string

  @IsString()
  phone: string

  @IsString()
  address: string

  @IsString()
  city: string

  @IsString()
  state: string

}
