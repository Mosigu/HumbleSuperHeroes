export class Superhero {
  private name: string;
  private superPower: string;
  private humilityScore: number;

  //Constructor for the superhero class
  constructor(name: string, superpower: string, humilityScore: number) {
    this.setName(name);
    this.setSuperPower(superpower);
    this.setHumilityScore(humilityScore);
  }

  //Get the name of the superhero
  public getName(): string {
    return this.name;
  }

  //Set the name of the superhero
  private setName(name: string) {
    this.name = name;
  }

  //Get the superpower of the superhero
  public getSuperPower(): string {
    return this.superPower;
  }

  //Set the superpower of the superhero
  private setSuperPower(superPower: string) {
    this.superPower = superPower;
  }

  //Get the humility score of the superhero
  public getHumilityScore(): number {
    return this.humilityScore;
  }

  //Set the humility score of the superhero
  private setHumilityScore(humilityScore: number) {
    if (humilityScore < 0 || humilityScore > 100) {
      throw new Error('Humility score must be between 0 and 100');
    }
    this.humilityScore = humilityScore;
  }
}
