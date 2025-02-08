import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { Superhero } from './entities/superhero.entity';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  // Mock superheroes
  const mockSuperheroes = [
    new Superhero('Batman', 'Rich', 5),
    new Superhero('Spider-Man', 'Spider powers', 8),
    new Superhero('Iron Man', 'Tech genius', 3),
  ];

  // Mock service using actual Superhero instances
  const mockSuperheroesService = {
    getSuperheroesByHumility: jest
      .fn()
      .mockResolvedValue(
        [...mockSuperheroes].sort(
          (a, b) => b.getHumilityScore() - a.getHumilityScore(),
        ),
      ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [
        {
          provide: SuperheroesService,
          useValue: mockSuperheroesService,
        },
      ],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  describe('getSuperheroesByHumility', () => {
    it('should return an array of superheroes sorted by humility score in descending order', async () => {
      // Get the result
      const result = await controller.getSuperheroesByHumility();

      // Verify service was called
      expect(service.getSuperheroesByHumility).toHaveBeenCalled();

      // Verify array is returned
      expect(Array.isArray(result)).toBe(true);

      // Verify the order by checking humility scores
      const humilityScores = result.map((hero) => hero.getHumilityScore());
      expect(humilityScores).toEqual([8, 5, 3]);

      // Verify complete superhero objects
      expect(result[0].getName()).toBe('Spider-Man');
      expect(result[1].getName()).toBe('Batman');
      expect(result[2].getName()).toBe('Iron Man');
    });
  });
});
