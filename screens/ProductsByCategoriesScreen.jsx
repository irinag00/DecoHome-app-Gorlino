import { View, Text, StyleSheet, FlatList } from "react-native";
import products_data from "../data/products_data.json";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";

const ProductsByCategoriesScreen = ({ category, onReturnHome }) => {
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
      <Header title="Productos" onReturnHome={onReturnHome} />
      <Search onSearchHandler={onSearch} />
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ProductsByCategoriesScreen;
