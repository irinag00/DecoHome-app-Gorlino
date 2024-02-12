import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import CardProduct from "./CardProduct";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";

const OrderItem = ({ order }) => {
  return (
    <CardProduct style={styles.orderItemContainer}>
      <View>
        <Text style={styles.textOrderBold}>Compra #{order.orderId}</Text>
        <Text style={styles.textOrderRegular}>Fecha: {order.updatedAt}</Text>
        {order.cartProducts.map((product, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: product.thumbnail }}
              style={{ width: 50, height: 50, marginTop: 5 }}
            />
            <View style={styles.orderProductContainer}>
              <Text style={styles.textOrderBold}>{product.title}</Text>
              <Text style={styles.textOrderRegular}>
                ${product.price} x {product.quantity}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.searchIcon} onPress={null}>
        <Feather name="search" size={24} color={colors.main} />
      </TouchableOpacity>
    </CardProduct>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 15,
    marginHorizontal: 15,
  },
  searchIcon: {
    marginLeft: "auto",
  },
  textOrderRegular: {
    fontFamily: "Outfit-Regular",
    marginBottom: 5,
  },
  orderProductContainer: {
    marginLeft: 10,
  },
  textOrderBold: {
    fontFamily: "Outfit-Bold",
    fontSize: 14,
  },
});
