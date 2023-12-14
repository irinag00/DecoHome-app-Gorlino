import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";

const ProductItem = ({ product }) => {
  return (
    <TouchableOpacity style={styles.containerProduct}>
      <Text style={styles.titleProductItem}>{product.title}</Text>
      <Image
        style={styles.productImage}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  containerProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    shadowColor: colors.secondary,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 1,
    borderRadius: 10,
  },
  titleProductItem: {
    fontFamily: "Outfit-Bold",
    paddingVertical: 20,
    color: colors.main,
  },
  productImage: {
    width: 100,
    borderRadius: 10,
  },
});
