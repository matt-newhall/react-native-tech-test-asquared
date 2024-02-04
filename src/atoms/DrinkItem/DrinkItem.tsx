import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { StackParamsList, StackRoutes } from "../../../navigator";
import { DrinkInformation } from "../../types/types";

type DrinkItemProps = {
  drink: DrinkInformation;
  navigation: NativeStackNavigationProp<
    StackParamsList,
    StackRoutes.HomeScreen,
    undefined
  >;
};

export const DrinkItem = ({ drink, navigation }: DrinkItemProps) => (
  <TouchableOpacity
    onPress={() => navigation.navigate(StackRoutes.InfoScreen, { drink })}
  >
    <Text>{drink.name}</Text>
  </TouchableOpacity>
);
