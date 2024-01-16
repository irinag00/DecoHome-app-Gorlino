import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
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
        navigation.navigate("Products", category.name);
        dispatch(setCategorySelected(category.name));
      }}
    >
      <CardProduct
        style={{
          ...styles.cardContainer,
        }}
      >
        <View style={styles.categoryBtnImgContainer}>
          <Image
            style={styles.categoryImage}
            source={{ uri: category.thumbnail }}
          />
        </View>
        <Text style={styles.text}>{category.name}</Text>
      </CardProduct>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.main,
    height: 45,
    marginRight: 16,
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: "Outfit-SemiBold",
    color: colors.white,
    marginHorizontal: 10,
  },
  categoryBtnImgContainer: {
    height: 35,
    width: 35,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryImage: {
    height: 25,
    width: 25,
    resizeMode: "cover",
  },
});
