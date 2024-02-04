import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/pages/HomeScreen/HomeScreen";

const NavStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen name="Home" component={HomeScreen} />
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
