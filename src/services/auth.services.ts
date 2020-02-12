import { Request, Response } from "express";
import { createUser } from "../models/auth.model";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";
import { MongooseDocument } from "mongoose";
import { hashFunctions } from "../utils";

export class AuthService {
  public register = async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const hashedPass = await hashFunctions
        .encrypt(userData.secret, 10)
        .then(res => {
          return res;
        })
        .catch(error => console.log(error));
      userData.secret = hashedPass;
      const newUser = new createUser(userData);
      console.log(userData);
      newUser.save((error: Error, user: MongooseDocument) => {
        if (error) {
          res.status(503).json(error);
        }
        res.status(200).json(user);
      });
    } catch (error) {
      res.status(503).json(error);
    }
  };
  public getAllUsers(req: Request, res: Response) {
    createUser.find({}, (error: Error, user: MongooseDocument) => {
      if (error) {
        res.status(503).json(error);
      }
      res.status(200).json(user);
    });
  }
  public signIn(req: Request, res: Response) {}
  public forgotPassword(req: Request, res: Response) {}
}
