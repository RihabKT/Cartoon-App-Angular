import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  PokemonsList: Pokemon[] = POKEMONS;
  pokemon : Pokemon|undefined;

  constructor(private route:ActivatedRoute, private router:Router, private pokemonService:PokemonService) { }

  ngOnInit(): void {
    // this.PokemonsList = POKEMONS;
    const pokemonId:string|null = this.route.snapshot.paramMap.get("id");
    if (pokemonId){
      // this.pokemon= this.PokemonsList.find(pokemon => pokemon.id == +pokemonId);
      // this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.pokemonService.getPokemonById(+pokemonId)
                            .subscribe(pokemon => this.pokemon = pokemon);
    }else{
      this.pokemon = undefined;
    }
   
  }

  deletePokemon(pokemon:Pokemon){
this.pokemonService.deletePokemonById(pokemon.id)
                    .subscribe(() => this.goBack() );
  }

  goBack(){
      this.router.navigate(['/pokemons']);
  }
 goToEditPokemon(pokemon:Pokemon){
  this.router.navigate(['/edit/pokemon',pokemon.id]);
 }
  

}
