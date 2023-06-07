import { Component, OnInit } from '@angular/core';
import {  Resultado } from 'src/app/interfaces/pokeapi';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService){}

  listPokemon:Resultado[]= []

  ngOnInit(): void{
    this.chargeList();
  }

  async chargeList(){
    this.listPokemon = [...this.listPokemon ,  ...await this.pokemonService.getByPage()];
    console.log(this.listPokemon)
  }

}
