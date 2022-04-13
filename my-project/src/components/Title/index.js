import React from "react";
import { View, Text} from "react-native";
import styles from "./style";
import { LinearGradient } from 'expo-linear-gradient';

export default function Title(){
    return(
        <View >
            <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#FF7800', '#FFB700', '#FFD9B1']}
        style={styles.button}>
        <Text style={styles.textTitle}>Lorem</Text>
      </LinearGradient>
        </View>
    );
}