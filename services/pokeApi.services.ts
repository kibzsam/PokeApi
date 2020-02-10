import { Request, Response } from "express";
import { WELCOME_MESSAGE } from "../src/constants/pokeApi.constants";
import { Pokemon } from "../src/models/pokemon.model";
import { MongooseDocument } from "mongoose";
export class PokeService {
  //Welcome Message
  public welcomeGreetings(req: Request, res: Response) {
    console.log("should run");
    return res.status(200).json(WELCOME_MESSAGE);
  }
  //Getting data from database
  public getAllPokemon(req: Request, res: Response) {
    Pokemon.find({}, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
        // res.send(error);
        res.status(503).json(error);
      }
      res.status(200).json(pokemon);
    });
  }
  //Adding new Pokemon
  public addNewPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save((error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.status(503).json(error);
      }
      res.status(200).json(pokemon);
    });
  }
}
