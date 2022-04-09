import React from "react";
import { View, Text } from "react-native";

export default function ResultMedia (props){
    return(
        <View>
            <Text>{props.ResultMedia}</Text>
            <Text>{props.messageResultMedia}</Text>
        </View>
    );
}