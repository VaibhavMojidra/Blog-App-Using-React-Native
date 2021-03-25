import { StyleSheet } from 'react-native';

export const Colors={
    subtitleGrayColor: "#7C7E7D",
    lightGray: "#d4d6d5",
    darkGray: "#7a7a7a",
    primaryColor: "#311b92",
    secondaryColor: "#FFFFFF",
    redColor: "#d50000",
};

export default StyleSheet.create({
    headerStyle:{
        backgroundColor:Colors.primaryColor,
    },
    headerTitleStyle:{
        color:Colors.secondaryColor,
        alignSelf:'center',
    },
    blogListItemContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:12,
        borderBottomColor:Colors.lightGray,
        borderBottomWidth:0.5,
    },
    blogItemTitle:{
        fontSize: 18,
        textAlignVertical: 'center',
        paddingLeft:13,
    },
    blogIcon:{
        fontSize: 35,
        paddingRight:12,
    },
    parentView:{
        flex:1,
    },
    addButton:{
        flex:1,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        bottom: 20,
        right: 20,
        width:60,
        height:60,
        backgroundColor: Colors.primaryColor,
        borderRadius:100,
    },
    inputText:{
        borderRadius: 6,
        padding:8,
        marginHorizontal: 30,
        fontSize:18,
    },
    inputTextTitle:{
        marginVertical: 10,
        marginTop:30,
    },
    
    inputTextContent:{
        height:288,
        marginTop: 20,
        textAlignVertical:'top',
    },
    button:{
        backgroundColor: Colors.primaryColor,
        color:Colors.primaryColor,
        width:'auto',
        minWidth:100,
        paddingHorizontal:10,
        height:40,
        color:Colors.secondaryColor,
        textAlignVertical:'center',
        textAlign:'center',
        marginTop: 20,
        borderRadius:5,
        alignSelf:'center',
    },
    containerView:
    {
        flex:1,
        backgroundColor:Colors.darkGray+'AA',
        justifyContent:'center',
    },
    
});