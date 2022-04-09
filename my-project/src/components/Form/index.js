import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Main (){
    return(
        <View>
            <View>
                <Text>Calculado de Média</Text>
            </View>
            <View>
                <Text>Nota 1</Text>
                <TextInput
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
                <Text>Nota 2</Text>
                <TextInput
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
                <Text>Nota 3</Text>
                <TextInput
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
            </View>
            <View>
                <Text>Intervalo de Valores</Text>
            </View>
            <View>
                <Text>Valor 2</Text>
                <TextInput
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
                <Text>Valor 1</Text>
                <TextInput
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
            </View>
        </View>
    );
}