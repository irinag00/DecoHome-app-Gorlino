import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductsByCategoriesScreen from "../screens/ProductsByCategoriesScreen";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={({ navigation, route }) => ({
        header: () => <Header title={route.name} navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Products" component={ProductsByCategoriesScreen} />
      <Stack.Screen name="DetailProduct" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
