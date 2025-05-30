///////////////////////////////////////////////////////////////////////
import "./gesture-handler.native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Fav from "./src/screens/Fav";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavProvider } from "./src/store/FavContext";
import Login from "./src/screens/Login";
///////////////////////////////////////////////////////////////////////

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <FavProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Fav" component={Fav} />
        </Drawer.Navigator>
      </NavigationContainer>
    </FavProvider>
  );
}
