import React from "react";
import { View, Text } from "react-native";

export default function ResultIntervalo (props){
    return(
        <View>
            <Text>{props.ResultIntervalo}</Text>
            <Text>{props.messageResultIntervalo}</Text>
        </View>
    );
}