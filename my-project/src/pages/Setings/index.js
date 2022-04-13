import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Setings() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Página Setings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
    }
});