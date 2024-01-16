import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useGetProductsQuery } from "../services/shopServices";
import { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductDetailScreen = ({ route }) => {
  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const productId = route.params;
  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
  } = useGetProductsQuery();

  useEffect(() => {
    const productFound = productsData.find(
      (product) => product.id === productId
    );
    setProductSelected(productFound);
    setIsLoading(false);
  }, [productId]);

  const onAddToCart = () => {
    dispatch(addToCart({ ...productSelected, quantity: 1 }));
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.containerDetail}>
              <View style={styles.containerDetailImage}>
                <Image
                  style={styles.productImage}
                  source={{ uri: productSelected.thumbnail }}
                />
              </View>
              <View style={styles.rowTitleAndPrice}>
                <Text style={styles.productTitle}>{productSelected.title}</Text>
                <View style={styles.priceTag}>
                  <Text style={styles.priceProduct}>
                    $ {productSelected.price}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontFamily: "Outfit-Bold" }}>
                  Descripción
                </Text>
                <Text style={styles.productDescription}>
                  {productSelected.description}
                </Text>
              </View>
              <TouchableOpacity style={styles.buttonBuy} onPress={onAddToCart}>
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.white,
                    fontFamily: "Outfit-Bold",
                  }}
                >
                  Añadir al carrito
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  containerDetail: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 150,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  containerDetailImage: {
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  productTitle: {
    fontSize: 28,
    textTransform: "capitalize",
    fontFamily: "Outfit-Bold",
    width: "60%",
  },
  productDescription: {
    fontSize: 15,
    marginVertical: 10,
    color: "grey",
    fontFamily: "Outfit-Regular",
  },
  priceProduct: {
    fontFamily: "Outfit-Bold",
    fontSize: 23,
    color: colors.white,
    marginLeft: 15,
  },
  rowTitleAndPrice: {
    marginTop: 160,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceTag: {
    backgroundColor: colors.main,
    marginLeft: 45,
    width: 130,
    height: 50,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
  },
  buttonBuy: {
    backgroundColor: colors.main,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
});
