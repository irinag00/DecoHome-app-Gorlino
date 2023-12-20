import { View, Text, StyleSheet, FlatList } from "react-native";
import categories_data from "../data/categories_data.json";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import Search from "../components/Search";
import ProductsByCategoriesScreen from "./ProductsByCategoriesScreen";
const CategoriesScreen = ({ onSelectCategory }) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryItem
      category={item}
      onSelectCategory={onSelectCategory}
    ></CategoryItem>
  );

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Search />
        <Text style={styles.textCategories}>Categorías</Text>
        <FlatList
          horizontal
          data={categories_data}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  textCategories: {
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "Outfit-Bold",
  },
});
