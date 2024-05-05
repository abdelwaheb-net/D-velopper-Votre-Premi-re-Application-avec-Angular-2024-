import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from './pokemon';

@Component({
  selector: "app-root",
  standalone: true,

  templateUrl: 'app.component.html',
  // styles: [],
})
export class AppComponent implements OnInit {
  pokemonsList:Pokemon[] = POKEMONS;
  pokemonSelected:Pokemon|undefined;
  ngOnInit() {
    console.table(this.pokemonsList);
    // this.selectPokemon(this.pokemonsList[1]);
  }
/*   selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  } */
/*   selectPokemon(event:MouseEvent) {
    const index:number=+(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonsList[index].name}`);
  } */
  selectPokemon(pokemonId:string) {
  //  const  id = +pokemonId;
   const pokemon:Pokemon|undefined=this.pokemonsList.find(pokemon=>pokemon.id== +pokemonId);
   if(pokemon){
    console.log(`Vous avez démandé le pokémon ${pokemon.name}`);
    this.pokemonSelected=pokemon;
  }
  else
  {
    console.log(`Vous avez demandé un pokemon qui n'existe pas` );
    this.pokemonSelected=pokemon;
  }
  }
}
