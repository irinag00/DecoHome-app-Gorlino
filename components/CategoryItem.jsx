import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardProduct from "./CardProduct";

const CategoryItem = ({ category, onSelectCategory }) => {
  return (
    <TouchableOpacity onPress={() => onSelectCategory(category)}>
      <CardProduct style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </CardProduct>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: 10,
    paddingBottom: 20,
    paddingTop: 20,
    margin: 10,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: "Outfit-SemiBold",
  },
});
