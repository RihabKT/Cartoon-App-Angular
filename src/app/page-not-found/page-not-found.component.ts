import { Component } from '@angular/core';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" width="400"/>
      <h1>PAGE NOT FOUND !!!</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        HOMEPAGE
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
