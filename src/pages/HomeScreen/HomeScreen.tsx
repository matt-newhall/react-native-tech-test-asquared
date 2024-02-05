import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, FlatList, View } from "react-native";
import { StackParamsList, StackRoutes } from "../../../navigator";
import { DrinkItem } from "../../atoms/DrinkItem/DrinkItem";
import { styles } from "./styles";
import { useHomeScreen } from "./useHomeScreen";

export type HomeScreenProps = NativeStackScreenProps<
  StackParamsList,
  StackRoutes.HomeScreen
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { drinkData } = useHomeScreen();

  const isLoading = drinkData.length === 0;

  return (
    <View style={styles.screen}>
      <FlatList
        data={drinkData}
        renderItem={({ item }) => (
          <DrinkItem drink={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
      {isLoading && <ActivityIndicator size="large" />}
    </View>
  );
};
