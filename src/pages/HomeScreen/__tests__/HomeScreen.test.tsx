import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { render } from "@testing-library/react";
import { StackParamsList, StackRoutes } from "../../../../navigator";
import { HomeScreen } from "../HomeScreen";

jest.mock("../useHomeScreen", () => {
  return {
    useHomeScreen: () => {
      return {
        drinkData: [],
      };
    },
  };
});

describe("[Page] HomeScreen", () => {
  it("loading symbol appears when no drinks have loaded yet", async () => {
    const screen = render(
      <HomeScreen
        navigation={
          navigator as unknown as NativeStackNavigationProp<
            StackParamsList,
            StackRoutes.HomeScreen,
            undefined
          >
        }
        route={{ key: "1", name: StackRoutes.HomeScreen }}
      />
    );

    expect(screen.queryByTestId("loadingBar")).toBeTruthy();
  });
});
