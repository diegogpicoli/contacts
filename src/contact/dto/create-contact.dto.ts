import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @IsOptional()
  observation?: string;

  @IsNumber()
  tagId: number;
}
