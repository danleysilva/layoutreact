import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"50%%",
        bottom:0,
        backgroundColor:"#ffffff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:"30",
        alignItems:"center",
    },
    
    form:{
        width: "100%",
        height:"auto",
        marginTop:30,
        padding: 10,
    },

    formLabelTitle:{
        color:"#000000",
        fontSize:18,
        textAlign: "center",
        fontWeight: "bold"
    },
    
    formLabel:{
        color:"#000000",
        fontSize:14,
        paddingLeft:18,
        fontWeight: "bold",
        marginLeft:100,
    },

    input:{
        width:"60%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:18,
        marginLeft:100,
    },

    buttonCalculator:{
        borderRadius:50,
        color:"ffffff",
        alignItems:"center",
        justifyContent:"center",
        width:"70%",
        backgroundColor:"#FF7F00",
        paddingTop:14,
        paddingBottom:14,
        marginTop:30,
        marginLeft:75,
    },

    textButtonCalculator:{
       fontSize: 20,
       color: "#ffffff",
    },

});

export default styles