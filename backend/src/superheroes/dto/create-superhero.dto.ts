import { IsNumber, IsString, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  superPower: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  humilityScore: number;
}
