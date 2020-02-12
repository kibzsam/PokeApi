import { Application } from "express";
import { PokeService } from "../services/pokeApi.services";
import { AuthService } from "../services/auth.services";
export class Controller {
  private pokeService: PokeService;
  private authService: AuthService;
  constructor(private controller: Application) {
    this.pokeService = new PokeService();
    this.authService = new AuthService();
    this.routes();
  }
  public routes() {
    this.controller.route("/").get(this.pokeService.welcomeGreetings);
    this.controller.route("/pokemons").get(this.pokeService.getAllPokemon);
    this.controller.route("/addpokemon").post(this.pokeService.addNewPokemon);

    //Auth routes
    this.controller.route("/auth/signup").post(this.authService.register);
    this.controller.route("/auth/allusers").get(this.authService.getAllUsers);
    this.controller.route("/auth/signin").get(this.authService.signIn);
    this.controller.route("/auth/forgot").post(this.authService.forgotPassword);
  }
}
