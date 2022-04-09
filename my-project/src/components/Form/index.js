import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultMedia from "./ResultMedia/";
import ResultIntervalo from "./ResultIntervalo/";

export default function Main (){

const [nota1, setNota1] = useState(null)
const [nota2, setNota2] = useState(null)
const [nota3, setNota3] = useState(null)
const [messageMedia, setMessageMedia] = useState("preencha com suas notas")
const [media, setMedia] = useState(null)
const [valor1, setValor1] = useState(null)
const [valor2, setValor2] = useState(null)
const [valor3, setValor3] = useState(null)
const [messageIntervalo, setMessageIntervalo] = useState("preencha os valores")
const [intervalo, setIntervalo] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function mediaCalculator(){
    return setMedia((nota1+nota2+nota3/(3)) .toFixed(2))
}
  
function validationMedia(){
    if(nota1 != null && nota2 != null && nota3 != null){
        mediaCalculator()
        setNota1(null)
        setNota2(null)
        setNota3(null)
        setMessageMedia("Sua média é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setMedia(null)
    setTextButton("Calcular")
    setMessageMedia("preencha com suas notas")
}

function intervaloCalculator(){
    return setMedia((valor1+valor2+valor3/(3)) .toFixed(2))
}
  
function validationValor(){
    if(valor1 != null && valor2 != null && valor3 != null){
        mediaCalculator()
        setValor1(null)
        setValor2(null)
        setValor3(null)
        setMessageMedia("Sua média é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setIntervalo(null)
    setTextButton("Calcular")
    SetMessageIms("preencha com seus valores")
}

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