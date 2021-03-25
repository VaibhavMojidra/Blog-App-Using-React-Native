import React, { useContext, useState } from "react";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogContext";

const EditBlogScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const blog = state.find((blogpost) => blogpost.id === route.params.id);

  return (
    <BlogForm
      submitButtonText="UPDATE"
      initialValues={{ title: blog.title, content: blog.content }}
      onSubmitPress={(newText, newContent, setAlertData) => {
        editBlogPost(blog.id, newText, newContent, () => {
          setAlertData({
            title: "Blog Modified",
            message: "Blog has been sucessfully modified.",
            buttonText: "OK",
            showDialog: true,
            onButtonPress: () => {
              navigation.pop();
              setAlertData({ showDialog: false });
            },
          });
        });
      }}
    />
  );
};

export default EditBlogScreen;
