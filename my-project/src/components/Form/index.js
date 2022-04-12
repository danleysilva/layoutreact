import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultMedia from "./ResultMedia/";
import styles from "./style"

export default function Main (){

const [nota1, setNota1] = useState(null)
const [nota2, setNota2] = useState(null)
const [nota3, setNota3] = useState(null)
const [messageMedia, setMessageMedia] = useState("preencha com suas notas")
const [media, setMedia] = useState(null)
const [textButton, setTextButton] = useState("Calcular Média")

function mediaCalculator(){
    return setMedia (((parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) /3 ).toFixed(2))
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

    return(
        <View>
            <View style={styles.form}>
                <Text style={styles.formLabelTitle}>Calculadora de Média</Text>
            </View>
            <View>
                <Text style={styles.formLabel}>Nota 1</Text>
                <TextInput
                style={styles.input}
                onChangeText={setNota1}
                value={nota1}
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Nota 2</Text>
                <TextInput
                style={styles.input}
                onChangeText={setNota2}
                value={nota2}
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Nota 3</Text>
                <TextInput
                style={styles.input}
                onChangeText={setNota3}
                value={nota3}
                placeholder="Ex. 7.5"
                keyboardType="numeric"
                />
             <TouchableOpacity
             style={styles.buttonCalculator}
             onPress={() => {
                validationMedia()
             }}
             >
                 <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>   
            </View>
            <ResultMedia messageResultMedia={messageMedia} ResultMedia={media} />
            </View>
    );
}