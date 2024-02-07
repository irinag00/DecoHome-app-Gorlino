import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Swiper from "react-native-swiper";
import { colors } from "../global/colors";

const { width } = Dimensions.get("window");

const Carousel = ({ images }) => {
  return (
    <Swiper
      style={styles.container}
      showsButtons={true}
      autoplay={true}
      autoplayTimeout={5}
      dot={
        <View
          style={{
            backgroundColor: "gray",
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 3,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: colors.main,
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 3,
          }}
        />
      }
      nextButton={<Text style={{ color: colors.main, fontSize: 60 }}>›</Text>}
      prevButton={<Text style={{ color: colors.main, fontSize: 60 }}>‹</Text>}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: 350,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
