import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Input  from '../components/Input';
import MyButton from "../components/MyButton";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={styles.signInText}>Sign In</Text>
        <Input
            autocapitalize="none"
            placeholder="Username"
        />
        <Input
            secureTextEntry={true}
            placeholder="Password"
        />

          <View style={styles.buttonArea}>
        <MyButton
            text={"Sign In"}
            bgColor={"#0065e0"}
            textColor={"#f2f2f2"}
        />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText:{
    marginVertical:10,
    fontSize:14,
    color: "#333",
    fontWeight: "bold",
  },
    buttonArea:{
      flexDirection:"row",
        justifyContent: "center",

    }
});