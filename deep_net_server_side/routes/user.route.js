//Imports
import { Router } from "express";
import {
  addBrunchCocktails,
  addDrinks,
  addHookahFlavor,
  getallItems,
} from "../controllers/user.controller.js";


const userRoute = Router();

userRoute.post("/add-drinks", addDrinks);
userRoute.post("/add-brunch", addBrunchCocktails);
userRoute.post("/add-hookah", addHookahFlavor);
userRoute.get("/get-all-items", getallItems);

export { userRoute };
