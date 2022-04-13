import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultIntervalo (props){
    return(
        <View>
            <Text style={styles.information}>{props.messageResultIntervalo}</Text>
            <Text style={styles.numberIntervalo}>{props.ResultIntervalo}</Text>
            {props.ResultIntervalo > 0 && props.ResultIntervalo <= 10 ? (
            <Text>{props.ResultIntervalo} Intervalo entre 0 e 10</Text>
    ) : props.ResultIntervalo > 10 && props.ResultIntervalo <=20  ? (
            <Text>{props.ResultIntervalo} Recuperação</Text>
    ) : props.ResultIntervalo > 20  && props.ResultIntervalo <=30? (
            <Text>{props.ResultIntervalo} Aprovado</Text>
    ) : (
            <Text ></Text>
    )}

        </View>
    );
}