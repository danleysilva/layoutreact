import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIntervalo from "./ResultIntervalo/";

export default function Main (){

const [valor1, setValor1] = useState(null)
const [valor2, setValor2] = useState(null)
const [valor3, setValor3] = useState(null)
const [messageIntervalo, setMessageIntervalo] = useState("preencha com seus valores")
const [intervalo, setIntervalo] = useState(null)
const [textButton, setTextButton] = useState("Calcular")


function intervaloCalculator(){
    return setIntervalo (((parseInt(valor1) + parseInt(valor2) + parseInt(valor3)) /3 ).toFixed(2))
}
  
function validationIntervalo(){
    if(valor1 != null && valor2 != null && valor3 != null){
        intervaloCalculator()
        setValor1(null)
        setValor2(null)
        setValor3(null)
        setMessageIntervalo("Seu intervalo é:")
        setTextButton("Verificar Novamente")
        return
    }
    setIntervalo(null)
    setTextButton("Verificar")
    setMessageMedia("preencha com os valores")
}

    return(
        <View>
            <View>
                <Text>Valor 1</Text>
                <TextInput
                onChangeText={setValor1}
                value={valor1}
                placeholder="Ex. 7"
                keyboardType="numeric"
                />
                <Text>Valor 2</Text>
                <TextInput
                onChangeText={setValor2}
                value={valor2}
                placeholder="Ex. 7"
                keyboardType="numeric"
                />
                <Text>Valor 3</Text>
                <TextInput
                onChangeText={setValor3}
                value={valor3}
                placeholder="Ex. 7"
                keyboardType="numeric"
                />
                <Button
                onPress={() => validationIntervalo()} 
                title={textButton}
                />
            </View>
            <ResultIntervalo messageResultIntervalo={messageIntervalo} ResultIntervalo={intervalo} />
            </View>
    );
}