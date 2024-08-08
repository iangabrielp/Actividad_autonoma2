import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:0
        
    },
    title:{
        fontSize: 30,
        marginBottom:0,
        textAlign: 'center',
        color:'#fff',
        paddingHorizontal:40,
        paddingVertical:60,
        fontWeight:'bold',
    },
    button: {
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:15,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
        alignSelf:'center'

    },
    textButton:{
        color: 'white',
        fontSize:20,
        fontWeight: 'bold'

    },
    container: {
        paddingTop: 5,
      },
      tinyLogo: {
        width: 400,
        height: 400,
      },
      fondo: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      inputText:{
        backgroundColor: '#F1F4F5',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
    },
    contentInput:{
        marginTop:10,
        gap:10
    },
    buttonTextCompo:{
        color: '#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    result: {
        marginTop: 20,
        fontSize: 30,
        color: 'white', 
        textAlign:'center',
      },
});