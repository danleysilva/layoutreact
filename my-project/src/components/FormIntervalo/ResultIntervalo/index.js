import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultIntervalo (props){
    return(
        <View>
            <Text style={styles.information}>{props.messageResultIntervalo}</Text>
           {/* <Text style={styles.numberIntervalo}>{props.ResultIntervalo}</Text> */}
            {props.ResultIntervalo > 0 && props.ResultIntervalo <= 10 ? (
            <Text style={styles.informationSucess}>A sua média é: {props.ResultIntervalo} e está no intervalo entre 0 e 10</Text>
    ) : props.ResultIntervalo > 10 && props.ResultIntervalo <=20  ? (
            <Text style={styles.informationSucess}>A sua média é: {props.ResultIntervalo} e está no intervalo entre 10 e 20</Text>
    ) : props.ResultIntervalo > 20  && props.ResultIntervalo <=30? (
            <Text style={styles.informationSucess}>A sua média é: {props.ResultIntervalo} e está no intervalo entre 20 e 30</Text>
    ) : props.ResultIntervalo > 30 ? (
        <Text style={styles.informationSucess}>Sua média é: {props.ResultIntervalo} - Sua média está acima do limite</Text>
) :( 
            <Text ></Text>
    )}

        </View>
    );
}