//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity , Alert} from 'react-native';

import styles from './src/styles/ManipulandoStyles';

// create a component
class App extends Component {

  pressed = () => {
    Alert.alert("Digite os dados nos campos solicitados")

  }


  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require('./src/image/instagram.png')}
          style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone, nome de usuário ou e-mail"
        />


        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

         <TouchableOpacity
          style={styles.button} onPress={() => {this.pressed()}}>
            <Text style={styles.buttonText}>Entrar</Text>

         </TouchableOpacity>

      </View>

    );
  };
}

//make this component available to the app
export default App;






