import { View, Text, StyleSheet, FlatList } from "react-native";
import products_data from "../data/products_data.json";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { colors } from "../global/colors";

const ProductsByCategoriesScreen = ({ category }) => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const productsFilterByCategory = products_data.filter(
      (product) => product.category === category
    );
    const productsFiltered = productsFilterByCategory.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProductsByCategory(productsFiltered);
  }, [category, search]);

  const renderProductItem = ({ item }) => <ProductItem product={item} />;

  const onSearch = (search) => {
    setSearch(search);
  };
  return (
    <>
      <Header />
      <Search onSearchHandler={onSearch} />
      <View>
        <Text style={styles.categoryName}>{category}</Text>
      </View>

      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default ProductsByCategoriesScreen;

const styles = StyleSheet.create({
  categoryName: {
    color: colors.green,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
