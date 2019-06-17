import { TestBed } from '@angular/core/testing';
import { Hero } from './model/hero';
import { HEROES } from './model//mock-heroes';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
