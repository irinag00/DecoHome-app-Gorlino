import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.shopReducer.categories);
  const products = useSelector((state) => state.shopReducer.products);
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
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item}
          ></FlatList>
        </View>
        <FlatList
          data={products}
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
