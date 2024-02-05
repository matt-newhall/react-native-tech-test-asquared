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
  container: {
    flex: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: APP_COLORS.white,
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
  },
  tinyLogo: {
    width: 100,
    height: 200,
  },
  imageContainer: {
    flex: 1,
    minWidth: 30,
  },
  textContainer: {
    flex: 3,
    alignItems: "center",
  },
  title: {
    paddingTop: 20,
    fontSize: 32,
    textAlign: "center",
  },
});
