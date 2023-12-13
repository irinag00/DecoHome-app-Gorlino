import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import categories_data from "../data/categories_data.json";
import CategoryItem from "../components/CategoryItem";
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
        <Header title={"Categorías"} />
        <FlatList
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
    width: "100%",
  },
});
