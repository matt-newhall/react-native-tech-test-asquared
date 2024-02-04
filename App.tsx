import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamsList, StackRoutes } from "./navigator";
import { HomeScreen } from "./src/pages/HomeScreen/HomeScreen";
import { InfoScreen } from "./src/pages/InfoScreen/InfoScreen";

const NavStack = createNativeStackNavigator<StackParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen name={StackRoutes.HomeScreen} component={HomeScreen} />
        <NavStack.Screen name={StackRoutes.InfoScreen} component={InfoScreen} />
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
