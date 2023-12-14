import { View, Text, StyleSheet, FlatList } from "react-native";
import products_data from "../data/products_data.json";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const ProductsByCategoriesScreen = ({ category, onReturnHome }) => {
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    const productsFilterByCategory = products_data.filter(
      (product) => product.category === category
    );
    setProductsByCategory(productsFilterByCategory);
  }, [category]);

  const renderProductItem = ({ item }) => <ProductItem product={item} />;
  return (
    <>
      <Header title="Productos" onReturnHome={onReturnHome} />
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ProductsByCategoriesScreen;
