import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useHomeScreen } from "./useHomeScreen";

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export const HomeScreen = () => {
  const { drinkData } = useHomeScreen();

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={drinkData}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
