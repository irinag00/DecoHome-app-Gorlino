import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import user_data from "../data/user_data.json";
import { colors } from "../global/colors";

const ProfileScreen = () => {
  const [image, setImage] = useState(null);
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? colors.backgroundApp : "#DCDCDC",
            },
            styles.imageContainer,
          ]}
        >
          {image ? null : (
            <Image
              source={require("../../assets/img/user.png")}
              style={styles.profilePicture}
              resizeMode="contain"
            />
          )}
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
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    gap: 20,
    alignItems: "flex-start",
    justifyContent: "center",
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
});
