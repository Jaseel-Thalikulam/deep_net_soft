import { Drink } from "../models/drink.model.js";
import { BrunchCocktail } from "../models/brunch.model.js";
import { HookahFlavor } from "../models/hookah.model.js";
export const addDrinks = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    const newDrink = new Drink({ name, price, description });

    await newDrink.save();

    return res.status(201).json({
      status: true,
      message: "Drink added successfully",
      drink: newDrink,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const addBrunchCocktails = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    const newBrunchCocktail = new BrunchCocktail({ name, price, description });

    await newBrunchCocktail.save();

    return res.status(201).json({
      status: true,
      message: "Brunch cocktail added successfully",
      brunchCocktail: newBrunchCocktail,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const addHookahFlavor = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ status: false, message: "Name is required" });
    }

    const newHookahFlavor = new HookahFlavor({ name });

    await newHookahFlavor.save();

    return res.status(201).json({
      status: true,
      message: "Hookah flavor added successfully",
      hookahFlavor: newHookahFlavor,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const getallItems =async (req, res) => {
    try {
        const drinks = await Drink.find();
        const brunchCocktails = await BrunchCocktail.find();
        const hookahFlavors = await HookahFlavor.find();

        res.status(200).json({
            status: true,
            drinks,
            brunchCocktails,
            hookahFlavors
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
};