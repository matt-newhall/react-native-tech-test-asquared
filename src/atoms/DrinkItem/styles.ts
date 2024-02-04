import { StyleSheet } from "react-native";
import { APP_COLORS } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: APP_COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    flex: 1,
    minWidth: 30,
  },
  textContainer: {
    flex: 10,
  },
  title: {
    fontSize: 18,
  },
});
