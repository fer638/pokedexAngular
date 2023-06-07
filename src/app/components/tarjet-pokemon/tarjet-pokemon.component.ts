import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tarjet-pokemon',
  templateUrl: './tarjet-pokemon.component.html',
  styleUrls: ['./tarjet-pokemon.component.scss']
})
export class TarjetPokemonComponent implements OnChanges {

  constructor(private pokemonService: PokemonService){}

  ngOnChanges(): void {
    this.extractInformation()
  }

  

  @Input() data?:Resultado;
  id:string = "0";

  extractInformation(){
    if(this.data){
      this.id = this.data.url.substring(34, this.data.url.length-1);
      this.pokemonService.getById(this.id);
    }
  }

}
