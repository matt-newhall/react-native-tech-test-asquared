import { StyleSheet } from "react-native";
import { APP_COLORS } from "../../assets/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: APP_COLORS.background,
    justifyContent: "center",
  },
});
