import React,{useState,useEffect} from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import GlobalStyleSheet,{ Colors } from "../../assets/css/GlobalStyleSheet";

const CustomSimpleAlert = ({ title, message, buttonText, onButtonPress,showDialog }) => {
  return (
    <Modal transparent={true} visible={showDialog}>
      <View style={GlobalStyleSheet.containerView}>
        <View
          style={{
            height: 'auto',
            minHeight:'25%',
            backgroundColor: Colors.secondaryColor,
            alignSelf: "center",
            width: '80%',
            borderRadius: 5,
          }}
        >
          <Text style={{width:'100%',backgroundColor:Colors.primaryColor,borderTopRightRadius: 5,borderTopLeftRadius: 5,paddingHorizontal:10,paddingVertical:10,color:Colors.secondaryColor,fontSize:20}}>{title}</Text>
          <ScrollView style={{height:'15%'}}>
            <Text style={{paddingHorizontal:5,paddingVertical:5,fontSize:18}}>{message}</Text>
          </ScrollView>
          <TouchableOpacity onPress={()=>onButtonPress()}>
            <Text style={{minWidth:'20%',backgroundColor:Colors.primaryColor,borderRadius: 5,paddingHorizontal:7,paddingVertical:7,color:Colors.secondaryColor,textAlign:'center',alignSelf:'center',marginVertical:10,}}>{buttonText}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );
};

export default CustomSimpleAlert;
