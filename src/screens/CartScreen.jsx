import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
// import cart_data from "../data/cart_data.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartScreen = ({ navigation }) => {
  const cartProducts = useSelector((state) => state.cartReducer.productsCart);
  const total = useSelector((state) => state.cartReducer.total);
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({ total, cartProducts, user: "LoggedUsed" });
  };

  const renderCartItem = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.cartContainer}>
      {total != 0 ? (
        <>
          <FlatList
            data={cartProducts}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
          ></FlatList>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPrice}> Total </Text>
            <Text style={styles.totalPrice}> ${total}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmCart}
            >
              <Text style={styles.textConfirm}>Confirmar compra</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.cartEmptyContainer}>
          <MaterialCommunityIcons
            name="shopping-search"
            size={180}
            color="gray"
          />
          <Text style={styles.textCartEmpty}>
            ¡Empieza un carrito de compras!
          </Text>
          <Text style={styles.textCartEmptySubtitle}>
            Suma productos y disfruta.
          </Text>
          <TouchableOpacity
            style={styles.cartButtonEmpty}
            onPress={() => navigation.navigate("Categories")}
          >
            <Text style={styles.textConfirm}>Descubrir productos</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    marginTop: 10,
  },
  cartEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: "Outfit-Bold",
    textAlign: "right",
    marginRight: 20,
    marginBottom: 5,
  },
  confirmButton: {
    backgroundColor: colors.main,
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
  textConfirm: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
    color: colors.white,
  },
  textCartEmpty: {
    fontFamily: "Outfit-Bold",
    marginTop: 15,
    marginBottom: 5,
    fontSize: 18,
  },
  textCartEmptySubtitle: {
    fontFamily: "Outfit-Regular",
    marginBottom: 30,
    fontSize: 14,
  },
  cartButtonEmpty: {
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 13,
    width: "50%",
    alignItems: "center",
    backgroundColor: colors.main,
  },
});
