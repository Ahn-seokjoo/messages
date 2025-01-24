import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() // check value is string, not number, null, undefined, etc...
  content: string;
}
