import { Injectable } from '@angular/core';
import {  Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage():Promise<Resultado[]>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=100")
    const resJson = await res.json();
    if(resJson.results.lenght = 0)  return[];
    else 
    return resJson.results    
   
  }

  async getById(id:string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resJson = await res.json();
    console.log(resJson)
   
    //https://pokeapi.co/api/v2/pokemon/
  }

  getDescription(){

  }
}
