import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Colors } from "../../assets/css/GlobalStyleSheet";

const ShowBlogScreen = ({ route }) => {
  const { state } = useContext(Context);
  const blogspot = state.find((blogpost) => blogpost.id === route.params.id);

  return (
    <View>
      <Text style={styles.title}>{blogspot.title}</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.content}>{blogspot.content}</Text>
      </ScrollView>
    </View>
  );
};

ShowBlogScreen.navigationOptions = ({navigation,route}) => {
    
  return {
    headerTitle: "Blog Details",
    headerRight: () => (
      <TouchableOpacity style={{marginRight:15}} onPress={()=>{ navigation.navigate('EditBlogScreen',{id:route.params.id}) }}>
        <Feather name="edit" size={24} color={Colors.secondaryColor} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
  content: {
    fontSize: 18,
  },
  scrollView: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
});

export default ShowBlogScreen;
