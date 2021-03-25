import React, { useContext, useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import GlobalStyleSheet, { Colors } from "../../assets/css/GlobalStyleSheet";
import BlogForm from "../components/BlogForm";
import CustomSimpleAlert from "../components/CustomSimpleAlert";
import { Context } from "../context/BlogContext";

const CreateBlogScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return <BlogForm submitButtonText="POST" onSubmitPress={(title,content,setAlertData) => {
    addBlogPost(title, content, () => {
              setAlertData({
                title: "Blog Saved",
                message: "Blog has been sucessfully saved.",
                buttonText: "OK",
                showDialog: true,
                onButtonPress: () => {
                  navigation.navigate("BlogListScreen");
                  setAlertData({ showDialog: false });
                },
              });
            });
  }} />;
};

export default CreateBlogScreen;
