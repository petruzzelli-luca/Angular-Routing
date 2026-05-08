import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomePokemon } from './nome-pokemon';

describe('NomePokemon', () => {
  let component: NomePokemon;
  let fixture: ComponentFixture<NomePokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomePokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(NomePokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
