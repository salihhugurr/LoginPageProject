import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes, {PropsTypes} from 'prop-types'
export default class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button,{backgroundColor: this.props.bgColor}]}>
        <Text style={{color: this.props.textColor}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

const styles = StyleSheet.create({
  button: {
    flex:1,
    paddingVertical:15,
    paddingHorizontal:10,
    borderRadius:5,
    alignItems:"center",
    fontSize:15,
    fontWeight:"bold",
    marginHorizontal: 2,

  }
});