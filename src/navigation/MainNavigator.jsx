import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProfilePictureQuery } from "../services/shopServices";
import { setProfilePicture } from "../features/authSlice";

const MainNavigator = () => {
  const user = useSelector((state) => state.authReducer.user);
  const localId = useSelector((state) => state.authReducer.localId);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetProfilePictureQuery(localId);

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image));
    }
  }, [data]);
  return (
    <NavigationContainer>
      {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
