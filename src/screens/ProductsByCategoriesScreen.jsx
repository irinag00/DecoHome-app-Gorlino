import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopServices";

const ProductsByCategoriesScreen = ({ navigation, route }) => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState("");

  const category = useSelector((state) => state.shopReducer.categorySelected);

  const {
    data: productsByCategoryData,
    isLoading: productsByCategoryLoading,
    error: productsByCategoryError,
  } = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    if (!productsByCategoryLoading) {
      const productsValues = Object.values(productsByCategoryData);
      const productsFiltered = productsValues.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductsByCategory(productsFiltered);
    }
  }, [category, search, productsByCategoryData, productsByCategoryLoading]);

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  );

  const onSearch = (search) => {
    setSearch(search);
  };
  return (
    <>
      {productsByCategoryLoading ? (
        <ActivityIndicator />
      ) : (
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
      )}
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
