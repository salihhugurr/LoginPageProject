import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class Input extends Component {
  state = {
    text: ''
  };

  render() {
    return (
      <View>
        <TextInput
            {...this.props}
            placeholderTextColor="#bbb"
            placeholderFontWeight="bold"
            style={styles.input}
            value={this.state.text}
            onChangeText={text => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height:40,
    paddingHorizontal:5,
    borderWidth:1.5,
    borderRadius:4,
    borderColor: "black",
    color: "black",
    fontWeight: "800",
    marginVertical:4,
  }
});