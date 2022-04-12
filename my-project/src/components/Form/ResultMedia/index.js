import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultMedia (props){
    return(
        <View style={styles.resultMedia}>
            <Text style={styles.information}>{props.messageResultMedia}</Text>
            <Text style={styles.numberMedia}>{props.ResultMedia}</Text>
        </View>
    );
}