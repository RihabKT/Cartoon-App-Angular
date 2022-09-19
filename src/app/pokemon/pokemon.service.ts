import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PokemonService {

  constructor(private http:HttpClient) { }


//   getPokemonList():Pokemon[]{
// return POKEMONS;
//   }

getPokemonList():Observable<Pokemon[]>{
return this.http.get<Pokemon[]>('api/pokemons').pipe(
tap((response) => {this.log(response)}),
  catchError((err) => {
    console.log(err);
    return of([]);
  })
  );
}


// getPokemonById(pokemonId:number):Pokemon|undefined{
// return POKEMONS.find(pokemon => pokemonId == pokemon.id)
// }

getPokemonById(pokemonId:number):Observable<Pokemon|undefined>{
return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
tap((response) =>{ 
    this.log(response)}),
  catchError((err) => {
    console.log(err);
    return of(undefined);
  })
);
}


updatePokemon(pokemon:Pokemon):Observable<any>{
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
return this.http.put('api/pokemons',pokemon,httpOptions).pipe(
  tap((response) =>{this.log(response)}),
  catchError((err) => {
    console.log(err);
    return of(null);
  })
)
}

deletePokemonById(pokemonId:number):Observable<any>{
return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
  tap((response) =>{this.log(response)}),
  catchError((err) => {
    console.log(err);
    return of(null);
  })
);
}

addPokemon(pokemon:Pokemon): Observable<any>{
  const httpOptions ={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
    tap((response ) =>{
      this.log(response)}),
    catchError((err) => {
      console.log(err);
      return of(null);
    })
  );
}

searchPokemonList(term:string):Observable<Pokemon[]>{
  if(term.length<1){
    return of ([]);
  }
return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
  tap((response ) =>{
    this.log(response)}),
  catchError((err) => {
    console.log(err);
    return of([]);
  })
);
}



private log(response:any){
  console.log(response);
}



getPokeonTypeList():string[]{
return [
"Plante",
"Feu",
"Poison",
"Eau",
"Insecte",
"Vol",
"Normal",
"Electrik",
"Fée",
"Combat",
"Psy"]
}


}


