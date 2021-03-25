import React, { useContext, useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import GlobalStyleSheet, { Colors } from "../../assets/css/GlobalStyleSheet";
import CustomSimpleAlert from "./CustomSimpleAlert";
import { Context } from "../context/BlogContext";

const BlogForm = ({ initialValues={title:"",content:""},submitButtonText,onSubmitPress}) => {

  const onBlurStyle = { borderColor: Colors.darkGray, borderWidth: 1 };
  const onFocusStyle = { borderColor: Colors.primaryColor, borderWidth: 1.5 };
  const [textInputTitleFocusStyle, setTextInputTitleFocusStyle] = useState(onBlurStyle);
  const [textInputContentFocusStyle, setTextInputContentFocusStyle] = useState(onBlurStyle);

  const Validite = () => {
    if (titleText.trim() === "" || contentText.trim() === "") {
      setAlertData({
        title: "Invalid Input",
        message: "Please fill all the flieds",
        buttonText: "OK",
        showDialog: true,
        onButtonPress: () => {
          setAlertData({ showDialog: false });
        },
      });
      return false;
    } else {
      return true;
    }
  };
  const [titleText, setTitleText] = useState(initialValues.title);
  const [contentText, setContentText] = useState(initialValues.content);

  const [alertData, setAlertData] = useState({
    title: "",
    message: "",
    buttonText: "",
    showDialog: false,
    onButtonPress: () => {},
  });

  return (
    <View>
      <CustomSimpleAlert
        title={alertData.title}
        message={alertData.message}
        buttonText={alertData.buttonText}
        onButtonPress={alertData.onButtonPress}
        showDialog={alertData.showDialog}
      ></CustomSimpleAlert>
      <TextInput
        placeholder="Enter title"
        style={[
          GlobalStyleSheet.inputText,
          GlobalStyleSheet.inputTextTitle,
          textInputTitleFocusStyle,
        ]}
        onFocus={() => setTextInputTitleFocusStyle(onFocusStyle)}
        onBlur={() => setTextInputTitleFocusStyle(onBlurStyle)}
        onChangeText={(txt) => setTitleText(txt)}
        value={titleText}
      ></TextInput>
      <TextInput
        placeholder="Enter content"
        style={[
          GlobalStyleSheet.inputText,
          GlobalStyleSheet.inputTextContent,
          textInputContentFocusStyle,
        ]}
        onFocus={() => setTextInputContentFocusStyle(onFocusStyle)}
        onBlur={() => setTextInputContentFocusStyle(onBlurStyle)}
        multiline={true}
        numberOfLines={30}
        value={contentText}
        onChangeText={(txt) => setContentText(txt)}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          if (Validite()) {
            onSubmitPress(titleText,contentText,setAlertData);
          }
        }}
      >
        <Text style={GlobalStyleSheet.button}>{submitButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlogForm;