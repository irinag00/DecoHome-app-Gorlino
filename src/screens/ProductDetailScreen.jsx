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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../components/Carousel";

const ProductDetailScreen = ({ route }) => {
  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
    navigation.navigate("CartStack");
  };

  const renderItem = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.carouselImage} />;
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.containerDetail}>
            <View style={styles.containerDetailImage}>
              {/* Carousel de imágenes */}
              <Carousel
                style={styles.productImage}
                images={productSelected.images}
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
            <View
              style={{
                marginTop: 10,
              }}
            >
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
    backgroundColor: colors.backgroundApp,
    flex: 1,
    marginTop: 150,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  containerDetailImage: {
    height: 350,
    width: 350,
    position: "absolute",
    top: -130,
  },
  productTitle: {
    fontSize: 24,
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
    marginTop: 260,
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
