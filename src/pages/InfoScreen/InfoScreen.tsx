import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { StackParamsList, StackRoutes } from "../../../navigator";

export type InfoScreenProps = NativeStackScreenProps<
  StackParamsList,
  StackRoutes.InfoScreen
>;

export const InfoScreen = ({ navigation, route }: InfoScreenProps) => {
  const drink = route.params.drink;

  return <Text>HI</Text>;
};
