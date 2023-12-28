import { View, Text, StyleSheet, FlatList } from "react-native";
import categories_data from "../data/categories_data.json";
import products_data from "../data/products_data.json";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation}></CategoryItem>
  );

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  );
  return (
    <>
      <View style={styles.container}>
        <View>
          <FlatList
            horizontal
            data={categories_data}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item}
          ></FlatList>
        </View>
        <FlatList
          data={products_data}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
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
