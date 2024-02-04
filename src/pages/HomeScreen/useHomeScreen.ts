import { useEffect, useState } from "react";
import { PunkResponse } from "../../types/types";
import { fetchData } from "../../utils/fetchData";

export const useHomeScreen = () => {
  let [drinkData, setDrinkData] = useState<PunkResponse[]>([]);

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
