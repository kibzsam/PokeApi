import { Application } from "express";
import { PokeService } from "../services/pokeApi.services";
export class Controller {
  private pokeService: PokeService;

  constructor(private controller: Application) {
    this.pokeService = new PokeService();
    this.routes();
  }

  public routes() {
    this.controller.route("/").get(this.pokeService.welcomeGreetings);
    this.controller.route("/pokemons").get(this.pokeService.getAllPokemon);
    this.controller.route("http://localhost:9001/pokemon").post(() => {
      console.log("Working here");
    });
  }
}
