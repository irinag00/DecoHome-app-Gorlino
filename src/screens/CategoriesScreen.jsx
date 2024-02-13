import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  SectionList,
} from "react-native";
import CategoryItem from "../components/CategoryItem";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../services/shopServices";
const CategoriesScreen = ({ navigation }) => {
  // const categories = useSelector((state) => state.shopReducer.categories);
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();
  // const products = useSelector((state) => state.shopReducer.products);
  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
  } = useGetProductsQuery();
  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation}></CategoryItem>
  );

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  );
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/banner.jpg")}
          style={styles.banner}
          resizeMode="contain"
        />
        <View>
          <FlatList
            horizontal
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </View>
        <FlatList
          data={productsData}
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
  banner: {
    width: "100%",
    height: 100,
  },
});
