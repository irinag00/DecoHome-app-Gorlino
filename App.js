import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store";
import MainNavigator from "./src/navigation/MainNavigator";
import { init } from "./src/db/index";

export default function App() {
  init()
    .then(() => console.log("Base de datos inicializada correctamente"))
    .catch((error) => console.log(error));

  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
}
