/* eslint-disable prettier/prettier */
import { Contains, IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, Length, Min } from 'class-validator';


export class CreateUserDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  readonly fullName: string;

  @IsNotEmpty()
  @IsEmail()
  @Contains('@')
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  readonly balance: number;

  @IsNotEmpty()
  @Length(4, 16)
  readonly password: string;
}
