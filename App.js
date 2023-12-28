import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <>
      <TabNavigator />
    </>
  );
}
