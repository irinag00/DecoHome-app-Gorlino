import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const ProductsByCategoriesScreen = ({ navigation, route }) => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState("");

  const category = useSelector((state) => state.shopReducer.categorySelected);
  const productsFilterByCategory = useSelector(
    (state) => state.shopReducer.productsFilteredByCategory
  );

  useEffect(() => {
    const productsFiltered = productsFilterByCategory.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProductsByCategory(productsFiltered);
  }, [category, search]);

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  );

  const onSearch = (search) => {
    setSearch(search);
  };
  return (
    <>
      <Search onSearchHandler={onSearch} />
      <View style={styles.containerCategory}>
        <Text style={styles.categoryName}>{category}</Text>
      </View>
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.main }}
      />
    </>
  );
};

export default ProductsByCategoriesScreen;

const styles = StyleSheet.create({
  categoryName: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 20,
  },
  containerCategory: {
    backgroundColor: colors.main,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
