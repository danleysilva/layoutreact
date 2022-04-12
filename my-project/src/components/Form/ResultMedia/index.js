import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultMedia (props){
    return(
        <View style={styles.resultMedia}>
            <Text style={styles.information}>{props.messageResultMedia}</Text>
           {/* <Text style={styles.numberMedia}>{props.ResultMedia}</Text> */} 
            {props.ResultMedia > 0 && props.ResultMedia < 5 ? (
    <Text>{props.ResultMedia} <br></br>Reprovado</Text>
) : props.ResultMedia >= 5 && props.ResultMedia < 7 ? (
    <Text>{props.ResultMedia}<br></br> Recuperação</Text>
) : props.ResultMedia >= 7 ? (
    <Text>{props.ResultMedia}<br></br> Aprovado</Text>
) : (
    <Text ></Text>
)}

</View>
        
    );
}