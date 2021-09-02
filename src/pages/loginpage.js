import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import LoginForm from "./LoginForm";

export default class Loginpage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headBackground}/>
                <KeyboardAvoidingView behavior={"position"}>
                <View>
                    <Text style={styles.logo}>UDAC</Text>
                    <Text style={styles.logoDescription}>Property & Tax Survey</Text>
                </View>

                <ScrollView>
                    <View style={styles.loginArea}>

                        <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
                        <Text style={styles.loginAreaDescription}>Unique Door No Easily Fill Your Entire Property Tax Using App </Text>
                        <LoginForm/>
                    </View>
                </ScrollView>

                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpDescription}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:80
    },
    headBackground: {
        position: 'absolute',
        top: -20,
        left : -150,
        height : 350,
        width : '150%',
        backgroundColor: '#1572de',
        borderRadius : 150,
        borderBottomRightRadius: 1000
    },
    logo: {
        textAlign: "center",
        color: "#f2f2f2",
        fontSize: 40,
        fontWeight:"bold",
    },
    logoDescription: {
        textAlign: "center",
        color: "#f4f4f4",

    },
    loginArea: {
        marginHorizontal:50,
        marginVertical:50,
        backgroundColor: "#fff",
        padding:20,
        borderRadius:5,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: {
            width : 0,
            height:2,
        },
        elevation:5,
    },
    loginAreaTitle: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    loginAreaDescription: {
        fontSize: 11,
        color: "grey",
        marginVertical:10,
        textAlign:"center",
    },
    signUpDescription:{
      color: "#888"
    },
    signUpArea: {
        alignItems:"center"
    },
    signUpText: {
        color:"#666",
        fontWeight: "bold"
    }
});