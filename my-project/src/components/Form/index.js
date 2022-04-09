import React from "react";
import { View, Text, TextInput, Button } from "react-native";

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
                <Button title="Calcular Média"/>
            </View>
            <ResultMedia messageResultMedia={messageMedia} ResultMedia={media} />
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
                <Button title="Verificar Intevalo"/>
            </View>
            <ResultIntevalo messageResultMedia={messageIntervalo} ResultMedia={intervalo} />
        </View>
    );
}