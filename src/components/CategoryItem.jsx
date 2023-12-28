import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardProduct from "./CardProduct";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Products", { category });
        dispatch(setCategorySelected(category));
      }}
    >
      <CardProduct
        style={{
          ...styles.cardContainer,
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
    color: colors.white,
  },
});
