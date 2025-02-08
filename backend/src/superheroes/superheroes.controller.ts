import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  //Get all superheroes sorted by humility in descending order
  @Get()
  getSuperheroesByHumility() {
    return this.superheroesService.getSuperheroesByHumility();
  }

  // Create a new superhero
  @Post()
  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  createSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.createSuperhero(
      createSuperheroDto.name,
      createSuperheroDto.superPower,
      createSuperheroDto.humilityScore,
    );
  }
}
