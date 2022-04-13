import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultMedia:{
        flex:1,
        marginTop:10,
        paddingTop:10,
        borderRadius:50,
        alignItems:"center",
        width:"100%",
    },

    numberMedia:{
        fontSize:10,
        color:"#FF0043",
        fontWeight:"bold", 
    },

    information:{
        fontSize:14,
        paddingTop:6,
        textAlign:"center",
        color:"#000000",
        fontWeight:"bold",  
    },

    informationAproved:{
        fontSize:14,
        paddingTop:6,
        textAlign:"center",
        color:"#009100",
        fontWeight:"bold",  
    },

    informationFailed:{
        fontSize:14,
        paddingTop:6,
        textAlign:"center",
        color:"#ac0000",
        fontWeight:"bold",  
    },

    informationRestoration:{
        fontSize:14,
        paddingTop:6,
        textAlign:"center",
        color:"#c7b800",
        fontWeight:"bold",  
    },

});

export default styles