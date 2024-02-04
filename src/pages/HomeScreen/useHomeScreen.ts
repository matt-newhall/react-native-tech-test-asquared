import { useEffect, useState } from "react";
import { DrinkInformation } from "../../types/types";
import { fetchData } from "../../utils/fetchData";

export const useHomeScreen = () => {
  let [drinkData, setDrinkData] = useState<DrinkInformation[]>([]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=10";
    const json = await fetchData(url);
    await setDrinkData(json);
  };

  return { drinkData };
};
