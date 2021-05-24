import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/ManipulandoStyles';

class Home extends Component {
    render() {
        const {navigation} = this.props;
        const nameUser = navigation.getParam('nome'); 


        return (
            <View style={styles.container}>
                <Image source={require('../image/fotoperfil.jpeg')} style={styles.foto}/>
                <Text style={styles.texto3}>{nameUser}</Text>
                <Text style={styles.texto1}>Seja bem vindo(a) ao Home</Text>
            </View>
        );
    }

}

export default Home;
