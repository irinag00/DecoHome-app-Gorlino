import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";

const ProductItem = ({ product, onSelectProductId }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelectProductId(product.id)}
      style={styles.containerProduct}
    >
      <Image
        style={styles.productImage}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
      <Text style={styles.priceProductItem}>$ {product.price}</Text>
      <Text style={styles.titleProductItem}>{product.title}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  containerProduct: {
    backgroundColor: colors.backgroundProduct,
    shadowColor: "#000",
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 15,
    marginVertical: 16,
    marginHorizontal: 16,
    flex: 1,
    alignItems: "center",
  },
  titleProductItem: {
    fontFamily: "Outfit-Bold",
    textTransform: "capitalize",
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  priceProductItem: {
    fontFamily: "Outfit-Bold",
    fontSize: 20,
    paddingTop: 20,
    color: colors.main,
  },
});
