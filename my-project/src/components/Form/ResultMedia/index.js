import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultMedia (props){
    return(
        <View>
            <Text style={styles.information}>{props.messageResultIntervalo}</Text>
           {/* <Text style={styles.numberMedia}>{props.ResultMedia}</Text> */} 
            {props.ResultMedia > 0 && props.ResultMedia < 5 ? (
            <Text style={styles.informationFailed}>{props.ResultMedia} - Reprovado</Text>
    ) : props.ResultMedia >= 5 && props.ResultMedia < 7 ? (
            <Text style={styles.informationRestoration}>{props.ResultMedia} - Recuperação</Text>
    ) : props.ResultMedia >= 7 ? (
            <Text style={styles.informationAproved}>{props.ResultMedia} - Aprovado</Text>
    ) : props.ResultMedia == 0 ? (
        <Text style={styles.informationFailed}>{props.ResultMedia} - Reprovado</Text>
) :( 
            <Text ></Text>
    )}

</View>
        
    );
}