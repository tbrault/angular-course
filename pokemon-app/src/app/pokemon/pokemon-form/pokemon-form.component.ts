import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["./pokemon-form.component.css"],
})
export class PokemonFormComponent implements OnInit {
  types: string[];
  @Input() pokemon: Pokemon;
  isAddForm: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes("add");
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType(checked: boolean, type: string) {
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.pokemonService
        .addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) =>
          this.router.navigate(["/pokemons", pokemon.id])
        );
    } else {
      this.pokemonService
        .updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(["/pokemons", this.pokemon.id]));
    }
  }

  isTypesValid(type: string): boolean {
    const typesLength = this.pokemon.types.length;
    if (typesLength === 1 && this.hasType(type)) {
      return false;
    }

    if (typesLength > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
}
