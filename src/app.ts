import express from "express";
import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Controller } from "../controller/main.controller";
import mongoose from "mongoose";

class App {
  public app: Application;
  public pokeController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.pokeController = new Controller(this.app);
  }

  setConfig = () => {
    //Allows us to receive requests with data in x-ww-form-unrlencoded format
    this.app.use(bodyParser.json({ limit: "50mb" }));
    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    //Enable Cors
    this.app.use(cors());
  };

  setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/Pokemon", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

export default new App().app;
