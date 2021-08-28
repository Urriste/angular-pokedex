import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(private http:HttpClient) { }

  getPokemons(){
   return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=251")
  }

  getPokemon(pokeId: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
  }
}
