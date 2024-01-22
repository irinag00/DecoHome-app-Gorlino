import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { colors } from "../global/colors";
import OrdersNavigator from "./OrdersNavigator";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const cartItemCount = useSelector((state) => state.cartReducer.cartItemCount);
  return (
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
            <View>
              <MaterialCommunityIcons
                name="cart"
                size={24}
                color={focused ? colors.main : colors.gray}
              />
              {cartItemCount > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{cartItemCount}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="user-circle-o"
                size={24}
                color={focused ? colors.main : colors.gray}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    left: 19,
    bottom: 10,
    backgroundColor: colors.main,
    borderRadius: 30,
    height: 22,
    width: 22,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.lightGreen,
    borderWidth: 2,
  },
  badgeText: {
    color: colors.lightGreen,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default TabNavigator;
