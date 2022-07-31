import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
const MyAppsProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MyAppsProviders>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="PreparingOrder"
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </MyAppsProviders>
  );
}
