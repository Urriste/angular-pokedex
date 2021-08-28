import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeServiceService } from '../services/poke-service.service';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css']
})
export class AllPokemonsComponent implements OnInit {

  constructor(private pokeService: PokeServiceService, private router: Router) { }

  public nextPage?:any;
  public previousPage?:any;
  public scrolling?:boolean;

 public pokemones?:Array<any>

  ngOnInit(): void {
    this.getPokemons()
    
   
  }

  



  navigate(i:number){
    this.router.navigate([`/pokemon/${i + 1}`])
  }

  getPokemons(){
    this.pokeService.getPokemons().subscribe((res:any)=>{
      console.log(res,"res")
      this.nextPage = res.next!;
      this.previousPage = res.previous!
      this.pokemones = res.results
      console.log(res.results.length)
    })

  } 

  updateScroll(){
    this.scrolling = true;
  }

}
