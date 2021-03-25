import React, { useContext,useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyleSheet, { Colors } from "../../assets/css/GlobalStyleSheet";
import { AntDesign } from "@expo/vector-icons";

const BlogListScreen = ({navigation}) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View style={GlobalStyleSheet.parentView}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={GlobalStyleSheet.blogListItemContainer} onPress={()=>navigation.navigate('ShowBlogScreen',{id:item.id})}>
              <Text style={GlobalStyleSheet.blogItemTitle}>{item.title}</Text>
              <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                <MaterialIcons
                  style={GlobalStyleSheet.blogIcon}
                  name="delete-forever"
                  size={24}
                  color={Colors.redColor}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <TouchableOpacity
        style={GlobalStyleSheet.addButton}
        onPress={()=>navigation.navigate('CreateBlogScreen')}
      >
        <AntDesign name="plus" size={30} color={Colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default BlogListScreen;
