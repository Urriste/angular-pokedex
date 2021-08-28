import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeServiceService } from '../services/poke-service.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokeId?:any;
  nextId?:number
  prevId?:number
  pokemon:any;


  constructor(private pokeService: PokeServiceService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
        this.pokeId = this.route.snapshot.params.id
        this.nextId =  parseInt(this.pokeId) + 1
        this.prevId =  parseInt(this.pokeId) - 1


    this.getPokemon(this.route.snapshot.params.id)
  }

   getPokemon(id:number){
     this.pokeService.getPokemon(id).subscribe((res)=>{
       console.log(res)
       this.pokemon = res
      } )
   } 

   typeStyles(typeName:string){
    switch (typeName) {
      case "grass":
          return "#78c850"
      case "poison":
            return "#a040a0"
      case "normal":
            return "#a8a878"
      case "fire":
          return "#f08030"
      case "water":
          return "#6890f0"
      case "electric":
          return "#f8d030" 
      case "ice":
          return "#98d8d8"
      case "fighting":
          return "#c03028"
      case "ground":
          return "#e0c068"
      case "flying":
          return "#a890f0"
      case "psychic":
          return "#f85888"
      case "bug":
          return "#d7df30"
      case "rock":
          return "#dfbf67"
      case "ghost":
          return "#705898"
      case "dark":
          return "#705848"
      case "dragon":
          return "#7038f8"
      case "steel":
          return "#b8b8d0"
      case "fairy":
          return "#f0b6bc"
      default:
        break;
    }


   }

   

}
