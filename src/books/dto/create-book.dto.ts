import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  id: number;

  @IsNotEmpty()
  title: string;
}
