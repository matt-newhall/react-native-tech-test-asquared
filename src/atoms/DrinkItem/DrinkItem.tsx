import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StackParamsList, StackRoutes } from "../../../navigator";
import { DrinkInformation } from "../../types/types";
import { styles } from "./styles";

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
    style={styles.container}
  >
    <View style={styles.imageContainer}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: drink.image_url,
        }}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{drink.name}</Text>
      <Text numberOfLines={1}>{drink.description}</Text>
    </View>
  </TouchableOpacity>
);
