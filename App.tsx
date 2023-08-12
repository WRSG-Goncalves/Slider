import React, { Component } from 'react';

import {

  StyleSheet,
  Text,
  View,
} from 'react-native';

import Slider from '@react-native-community/slider';

interface StateType {
  valor : number
}


export default class App extends Component<{}, StateType>{
  constructor(props: {}) {
    super(props)
    this.state = {
      valor: 50
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Slider

          minimumValue={0}
          maximumValue={100}
          onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
          value={this.state.valor}
          minimumTrackTintColor='this.#FF0000F0000F0000'
          maximumTrackTintColor='#FF0000'
          
        />
        <Text style={{textAlign:'center', fontSize: 30}}>Valor atual do Slider {this.state.valor.toFixed(0)}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  }
});
