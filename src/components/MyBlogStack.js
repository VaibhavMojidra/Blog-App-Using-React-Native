import { createStackNavigator } from "@react-navigation/stack";
import BlogListScreen from "../screens/BlogListScreen";
import React from "react";
import GlobalStyleSheet, { Colors } from "../../assets/css/GlobalStyleSheet";
import ShowBlogScreen from "../screens/ShowBlogScreen";
import CreateBlogScreen from "../screens/CreateBlogScreen";
import { Feather } from '@expo/vector-icons'; 
import {TouchableOpacity} from "react-native";
import EditBlogScreen from "../screens/EditBlogScreen";
const Stack = createStackNavigator();

const MyBlogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BlogListScreen"
      screenOptions={{
        headerStyle: GlobalStyleSheet.headerStyle,
        headerTitleStyle: GlobalStyleSheet.headerTitleStyle,
        headerTintColor: Colors.secondaryColor,
        headerTitleAlign:'center'
      }}
    >
      <Stack.Screen
        name="BlogListScreen"
        component={BlogListScreen}
        options={{ headerTitle: "My Blog List" }}
      />
      <Stack.Screen
        name="ShowBlogScreen"
        component={ShowBlogScreen}
        options={ShowBlogScreen.navigationOptions}
      />
      <Stack.Screen
        name="CreateBlogScreen"
        component={CreateBlogScreen}
        options={{ headerTitle: "Create New Blog" }}
      />
      <Stack.Screen
        name="EditBlogScreen"
        component={EditBlogScreen}
        options={{ headerTitle: "Edit Blog" }}
      />
    </Stack.Navigator>
  );
};

export default MyBlogStack;
