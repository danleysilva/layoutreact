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
        marginTop:5,
        padding: 5,
    },

    formLabelTitle:{
        color:"#000000",
        fontSize:14,
        textAlign: "center",
        fontWeight: "bold"
    },
    
    formLabel:{
        color:"#000000",
        fontSize:12,
        paddingLeft:100,
        fontWeight: "bold",
    },

    input:{
        width:"60%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height:30,
        margin:5,
        paddingLeft:18,
        marginLeft:"20%",
    },

    buttonCalculator:{
        borderRadius:50,
        color:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        backgroundColor:"#FF7F00",
        height:30,
        paddingTop:0,
        marginTop:10,
        marginLeft:"25%",
    },

    textButtonCalculator:{
       fontSize: 18,
       color: "#ffffff",
    },

});

export default styles