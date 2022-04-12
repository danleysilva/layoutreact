import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"50%%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:"30",
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
    },

    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:18,
    },

    buttonCalculator:{
        borderRadius:50,
        color:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        backgroundColor:"#FF7F00",
        paddingTop:14,
        paddingBottom:14,
        marginTop:30,
    },

    textButtonCalculator:{
       fontSize: 20,
       color: "#ffffff",
    },

});

export default styles