import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardProduct from "./CardProduct";
import { colors } from "../global/colors";

const CategoryItem = ({ category, onSelectCategory }) => {
  return (
    <TouchableOpacity onPress={() => onSelectCategory(category)}>
      <CardProduct
        style={{
          ...styles.cardContainer,
          // backgroundColor: category === null ? colors.main : "#fff",
        }}
      >
        <Text style={styles.text}>{category}</Text>
      </CardProduct>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.main,
    marginRight: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 16,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: "Outfit-SemiBold",
  },
});
