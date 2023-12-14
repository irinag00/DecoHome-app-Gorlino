import { ActivityIndicator } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import ProductsByCategoriesScreen from "./screens/ProductsByCategoriesScreen";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator />;
  const onSelectCategory = (category) => {
    setCategorySelected(category);
  };
  const onReturnHome = () => {
    setCategorySelected("");
  };
  return (
    <>
      {categorySelected ? (
        <ProductsByCategoriesScreen
          category={categorySelected}
          returnHomeHandler={onReturnHome}
        />
      ) : (
        <CategoriesScreen onSelectCategory={onSelectCategory} />
      )}
    </>
  );
}
