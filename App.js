import { ActivityIndicator } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import ProductsByCategoriesScreen from "./screens/ProductsByCategoriesScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import { useFonts } from "expo-font";
import { useState } from "react";
import Navigator from "./navigation/Navigator";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productIdSelected, setProductIdSelected] = useState(null);

  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator />;
  const onSelectCategory = (category) => {
    setCategorySelected(category);
    console.log(category);
  };
  const onSelectProductId = (productId) => {
    setProductIdSelected(productId);
    console.log(productId);
  };
  return (
    <>
      <Navigator />
      {/* {productIdSelected ? (
        <ProductDetailScreen productId={productIdSelected} />
      ) : categorySelected ? (
        <ProductsByCategoriesScreen
          category={categorySelected}
          onSelectProductId={onSelectProductId}
        />
      ) : (
        <CategoriesScreen
          onSelectCategory={onSelectCategory}
          onSelectProductId={onSelectProductId}
        />
      )} */}
    </>
  );
}
