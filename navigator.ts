import { DrinkInformation } from "./src/types/types";

export enum StackRoutes {
  HomeScreen = "HomeScreen",
  InfoScreen = "InfoScreen",
}

export type StackParamsList = {
  [StackRoutes.HomeScreen]: undefined;
  [StackRoutes.InfoScreen]: { drink: DrinkInformation };
};
