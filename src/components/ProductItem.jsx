import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setProductIdSelected } from "../features/shopSlice";
import { addToCart } from "../features/cartSlice";
const ProductItem = ({ product, navigation }) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigation.navigate("CartStack");
  };

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setProductIdSelected(product.id));
        navigation.navigate("DetailProduct", product.id);
      }}
      style={styles.containerProduct}
    >
      <View style={styles.containerImage}>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={{ uri: product.thumbnail }}
        />
      </View>
      <View>
        <Text style={styles.priceProductItem}>$ {product.price}</Text>
        <Text style={styles.titleProductItem}>{product.title}</Text>
      </View>
      <View style={styles.addToCartBtn}>
        <TouchableOpacity onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  containerProduct: {
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 13,
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 18,
    marginVertical: 12,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  containerImage: {
    alignItems: "center",
  },
  titleProductItem: {
    fontFamily: "Outfit-Regular",
    textTransform: "capitalize",
    width: "80%",
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
    color: colors.black,
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  addToCartBtn: {
    marginTop: 5,
    height: 40,
    borderRadius: 20,
    padding: 8,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    fontFamily: "Outfit-Bold",
    color: colors.white,
    fontSize: 14,
  },
});
