import React, { useEffect, useState } from "react";
import "../styles/drinks.css";
import ItemsCards from "../components/ItemsCards";
import { getDrinksData } from "../api/api";
export interface Drink {
  name: string;
  price: string;
  description: string;
}
const Drinks = () => {
  const [brunchData, setBrunchData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [hookahData, setHookahData] = useState([]);

  useEffect(() => {
    (async function getData() {
      const data = await getDrinksData();
      setBrunchData(data.brunchCocktails);
      setHookahData(data.hookahFlavors);
      setDrinksData(data.drinks);
    })();
  }, []);

  return (
    <>
      <ItemsCards
        title="DRINKS"
        data={drinksData}
        img={["drink-one", "cocktail-one"]}
      />
      <ItemsCards
        title="BRUNCH COCKTAILS"
        data={brunchData}
        img={["drink-two", "cocktail-two"]}
      />
      <ItemsCards title="HOOKAH FLAVORS" data={hookahData} />
    </>
  );
};

export default Drinks;
