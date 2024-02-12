import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import user_data from "../data/user_data.json";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { logOut } from "../features/authSlice";
import { deleteSession } from "../db";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.authReducer.profilePicture);
  const email = useSelector((state) => state.authReducer.user);
  const localId = useSelector((state) => state.authReducer.localId);

  const onLogOut = () => {
    dispatch(logOut());
    const deletedSession = deleteSession(localId);
    console.log("Sesión eliminada: ", deletedSession);
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Mi perfil</Text>
      <View style={styles.container}>
        <View>
          <Pressable
            onPress={() => navigation.navigate("SelectorImage")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#E8E8E8" : "#DCDCDC",
              },
              styles.imageContainer,
            ]}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.profilePicture}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("../../assets/img/user.png")}
                style={styles.profilePicture}
                resizeMode="contain"
              />
            )}
            <View style={styles.badgeContainer}>
              <FontAwesome5 name="pen" size={15} color="white" />
            </View>
          </Pressable>
        </View>
        <View style={styles.userDataContainer}>
          <Text style={styles.userName}>{user_data.name}</Text>
          <Text style={styles.userData}>{user_data.role}</Text>
          <Text style={styles.userData}>Nivel: {user_data.level}</Text>
          <Text style={styles.userData}>Dirección: {user_data.address}</Text>
          <Text style={styles.userData}>Ciudad: {user_data.city}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        {email && (
          <TouchableOpacity onPress={onLogOut} style={styles.logOutButton}>
            <Text style={styles.btnTextLogout}>Cerrar Sesión</Text>
            <Entypo name="log-out" size={24} color={colors.main} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    gap: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "Outfit-Bold",
    fontSize: 20,
    marginBottom: 15,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  userDataContainer: {
    marginTop: 10,
  },
  userName: {
    fontFamily: "Outfit-Bold",
    fontSize: 18,
  },
  userData: {
    fontFamily: "Outfit-Regular",
    fontSize: 15,
  },
  badgeContainer: {
    position: "absolute",
    left: 110,
    bottom: 7,
    backgroundColor: colors.main,
    borderRadius: 30,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 2,
  },
  badgeText: {
    color: colors.lightGreen,
    fontSize: 12,
    fontWeight: "bold",
  },
  logOutButton: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 18,
    paddingVertical: 10,
    width: "70%",
    alignItems: "center",
    borderWidth: 3,
    borderColor: colors.main,
    flexDirection: "row",
    justifyContent: "center",
  },
  btnTextLogout: {
    color: colors.main,
    fontFamily: "Outfit-Bold",
    fontSize: 16,
    marginRight: 5,
  },
});
