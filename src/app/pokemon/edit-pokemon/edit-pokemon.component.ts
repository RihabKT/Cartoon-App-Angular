import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(private route:ActivatedRoute  , private pokemonService:PokemonService) { }

  ngOnInit(): void {
    const pokemonId:string|null = this.route.snapshot.paramMap.get("id");
if(pokemonId){
// this.pokemon= this.pokemonService.getPokemonById(+pokemonId);
this.pokemonService.getPokemonById(+pokemonId)
.subscribe(pokemon => this.pokemon = pokemon);
}else{
  this.pokemon = undefined;
}

  }

}
