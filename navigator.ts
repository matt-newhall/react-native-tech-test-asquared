import { DrinkInformation } from "./src/types/types";

export enum StackRoutes {
  HomeScreen = "Home",
  InfoScreen = "Drink Information",
}

export type StackParamsList = {
  [StackRoutes.HomeScreen]: undefined;
  [StackRoutes.InfoScreen]: { drink: DrinkInformation };
};
