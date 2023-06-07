import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetPokemonComponent } from './tarjet-pokemon.component';

describe('TarjetPokemonComponent', () => {
  let component: TarjetPokemonComponent;
  let fixture: ComponentFixture<TarjetPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetPokemonComponent]
    });
    fixture = TestBed.createComponent(TarjetPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
