import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class userDomain {
  @IsOptional()
  @IsString({ message: 'ID should be a string' })
  readonly id?: string;

  @IsString({ message: 'Name should be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name should be at least 3 characters long' })
  @MaxLength(100, { message: 'Name should not exceed 100 characters' })
  readonly name: string;

  @IsString({ message: 'Email should be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  readonly email: string;

  @IsOptional()
  @IsString({ message: 'Password should be a string' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  @MaxLength(50, { message: 'Password should not exceed 50 characters' })
  readonly password?: string;

  @IsOptional()
  @IsDate({ message: 'Invalid date format' })
  readonly updatedAt?: Date;
}
