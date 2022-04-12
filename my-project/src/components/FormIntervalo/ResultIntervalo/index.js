import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultIntervalo (props){
    return(
        <View style={styles.resultIntervalo}>
            <Text style={styles.information}>{props.messageResultIntervalo}</Text>
            <Text style={styles.numberIntervalo}>{props.ResultIntervalo}</Text>
        </View>
    );
}