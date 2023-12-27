import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {

  @IsString()
  name: string

  @IsNumber()
  age: number

  @IsString()
  @MinLength(8)
  password: string

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
