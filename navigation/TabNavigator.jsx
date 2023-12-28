import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../global/colors";
import OrdersNavigator from "./OrdersNavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShopNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home"
                size={24}
                color={focused ? colors.main : colors.gray}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OrdersStack"
          component={OrdersNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="shopping-bag"
                size={24}
                color={focused ? colors.main : colors.gray}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="cart"
                size={24}
                color={focused ? colors.main : colors.gray}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigator;
