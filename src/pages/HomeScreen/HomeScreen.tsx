import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { DrinkItem } from "../../atoms/DrinkItem/DrinkItem";
import { styles } from "./styles";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { drinkData } = useHomeScreen();

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={drinkData}
          renderItem={({ item }) => (
            <DrinkItem
              title={item.name}
              imageUrl={item.image_url}
              description={item.description}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};
