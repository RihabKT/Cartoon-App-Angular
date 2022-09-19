import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  PokemonsList: Pokemon[] 



  constructor(private router:Router, private pokemonService:PokemonService) { }

  ngOnInit(): void {
    // this.PokemonsList = this.pokemonService.getPokemonList();
  this.pokemonService.getPokemonList()
                            .subscribe(PokemonsList => this.PokemonsList = PokemonsList);
  }

goToPokemon( pokemon:Pokemon){
this.router.navigate(['/pokemon',pokemon.id])
}

}
