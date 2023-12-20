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
import products_data from "../data/products_data.json";
import { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ProductDetailScreen = ({ productId }) => {
  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const productFound = products_data.find(
      (product) => product.id === productId
    );
    setProductSelected(productFound);
    setIsLoading(false);
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 16,
                justifyContent: "space-between",
              }}
            >
              <Pressable onPress={null}>
                <Ionicons
                  name="arrow-back-sharp"
                  size={30}
                  color="white"
                  style={{ top: 30 }}
                />
              </Pressable>
              <Pressable onPress={null}>
                <MaterialCommunityIcons
                  name="cart"
                  size={28}
                  color="white"
                  style={{ top: 30 }}
                />
              </Pressable>
            </View>
            <View style={styles.containerDetail}>
              <View style={styles.containerDetailImage}>
                <Image
                  style={styles.productImage}
                  source={{ uri: productSelected.images[1] }}
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
              <TouchableOpacity style={styles.buttonBuy}>
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.white,
                    fontFamily: "Outfit-Bold",
                  }}
                >
                  Comprar
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
    marginTop: 210,
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
    fontSize: 26,
    color: colors.white,
    marginLeft: 15,
  },
  rowTitleAndPrice: {
    marginTop: 150,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceTag: {
    backgroundColor: colors.main,
    marginLeft: 75,
    width: 100,
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
