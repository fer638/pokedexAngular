import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPokemonComponent } from './pic-pokemon.component';

describe('PicPokemonComponent', () => {
  let component: PicPokemonComponent;
  let fixture: ComponentFixture<PicPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicPokemonComponent]
    });
    fixture = TestBed.createComponent(PicPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
