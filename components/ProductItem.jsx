import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";
import { Ionicons } from "@expo/vector-icons";

const ProductItem = ({ product }) => {
  return (
    <TouchableOpacity style={styles.containerProduct}>
      <Image
        style={styles.productImage}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
      <Text style={styles.titleProductItem}>{product.title}</Text>
      <View style={styles.columnPriceAndButton}>
        <Text style={styles.priceProductItem}>$ {product.price}</Text>
        <View style={styles.buttonProductItem}>
          <Ionicons name="add" size={24} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  containerProduct: {
    backgroundColor: "#f8f9fa",
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
  },
  titleProductItem: {
    fontFamily: "Outfit-Bold",
    paddingTop: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "center",
    borderRadius: 10,
    marginHorizontal: 4,
  },
  priceProductItem: {
    fontFamily: "Outfit-SemiBold",
  },
  columnPriceAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  buttonProductItem: {
    height: 25,
    width: 25,
    backgroundColor: colors.main,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
});
