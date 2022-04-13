import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import ResultIntervalo from "./ResultIntervalo/";
import styles from "./style"

export default function Main (){

const [valor1, setValor1] = useState(null)
const [valor2, setValor2] = useState(null)
const [valor3, setValor3] = useState(null)
const [messageIntervalo, setMessageIntervalo] = useState("Informe os valores acima")
const [intervalo, setIntervalo] = useState(null)
const [textButton, setTextButton] = useState("Verificar Intervalo")


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
        setTextButton("Verificar Intervalo")
        return
    }
    setIntervalo(null)
    setTextButton("Verificar Intervalo")
    setMessageIntervalo("Informe os valores acima")
}

    return(
        <View>
            <ScrollView style={styles.form}>
            <Text style={styles.formLabelTitle}>Verificar Intervalos</Text>
                <Text style={styles.formLabel}>Valor 1</Text>
                <TextInput
                style={styles.input}
                onChangeText={setValor1}
                value={valor1}
                placeholder="Ex. 7"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Valor 2</Text>
                <TextInput
                style={styles.input}
                onChangeText={setValor2}
                value={valor2}
                placeholder="Ex. 7"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Valor 3</Text>
                <TextInput
                style={styles.input}
                onChangeText={setValor3}
                value={valor3}
                placeholder="Ex. 7"
                keyboardType="numeric"
                />
                <TouchableOpacity
             style={styles.buttonCalculator}
             onPress={() => {
                validationIntervalo()
             }}
             >
                 <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>   
            </ScrollView>
            <ResultIntervalo messageResultIntervalo={messageIntervalo} ResultIntervalo={intervalo} />
            </View>
    );
}