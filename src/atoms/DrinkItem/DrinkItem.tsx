import { Text, View } from "react-native";

type DrinkItemProps = {
  description: string;
  imageUrl: string;
  title: string;
};

export const DrinkItem = ({ title }: DrinkItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);
