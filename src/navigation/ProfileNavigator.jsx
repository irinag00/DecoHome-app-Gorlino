import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={({ navigation, route }) => ({
        header: () => <Header title={route.name} navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
