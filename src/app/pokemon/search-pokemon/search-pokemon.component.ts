import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import {Observable , Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged,map, switchMap } from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemons$ : Observable <Pokemon[]>;


  constructor(private router:Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
  debounceTime(100),
  distinctUntilChanged(),
  switchMap((term) =>this.pokemonService.searchPokemonList(term))

    );
  }

  search(term:string){
this.searchTerms.next(term);
  }

  goToDetail(pokemon:Pokemon){
 const link =['/pokemon',pokemon.id];
 this.router.navigate(link);
  }

}
