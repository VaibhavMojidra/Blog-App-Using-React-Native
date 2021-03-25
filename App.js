import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import MyBlogStack from "./src/components/MyBlogStack";
import { Colors } from "./assets/css/GlobalStyleSheet";
import { Provider } from "./src/context/BlogContext";

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryColor}
        />
        <MyBlogStack />
      </NavigationContainer>
    </Provider>
  );
}
