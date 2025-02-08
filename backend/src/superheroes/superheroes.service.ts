import { Injectable } from '@nestjs/common';
import { Superhero } from './entities/superhero.entity';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  //Get all superheroes sorted by humility in descending order
  getSuperheroesByHumility() {
    return this.superheroes.length
      ? this.superheroes
          .slice()
          .sort((a, b) => b.getHumilityScore() - a.getHumilityScore())
      : [];
  }

  //Create a new superhero
  createSuperhero(name: string, superPower: string, humilityScore: number) {
    const superhero = new Superhero(name, superPower, humilityScore);
    this.superheroes.push(superhero);
    return superhero;
  }
}
