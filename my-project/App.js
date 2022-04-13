import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Title from './src/components/Title/';
import Form from './src/components/Form/';
import FormIntervalo from './src/components/FormIntervalo/';
import Routes from './src/routes';



export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <FormIntervalo/>
      <View>
        <NavigationContainer>
        <Routes/>
      </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:0,  
  },
});
