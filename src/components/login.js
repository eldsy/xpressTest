import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, } from 'react-native';
import ModalErrorView from './modalErrorView';
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';
import axios from 'axios';

class Login extends Component {

    state = {
        email: "",
        password: "",
        loading: false,
        loginError: false
    }


    getButtonBackgroundColor = () => {
        if (this.state.email != "" && this.state.password != "")
            return '#0f1f02';
        else return '#b7bbb3';
    }

    closeModal = () => {
        this.setState({ loginError: false });
    };

    login(user) {
        this.setState({loading: true});
        axios.post('https://reqres.in/api/login', user)
        .then(res => {
            console.log(res);
            this.props.navigation.navigate('Home');
            this.setState({loading: false});
        })
        .catch(error => {
            console.log(error);
            this.setState({loading: false});
            this.setState({ loginError: true });
          })
    }


    render() {

        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <Modal isVisible={this.state.loginError}>
                    <ModalErrorView closeModal={this.closeModal} message={'Email ou mot de passe incorrect'} />
                </Modal>
                <Text style={styles.logo}>XpresTest</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#0F1F02"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#0F1F02"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity style={[{ backgroundColor: this.getButtonBackgroundColor() }, styles.loginBtn]} onPress={() => {
                    let user = { email: this.state.email, password: this.state.password };
                    if (user.email != "" && user.password != "") {
                        this.login(user)
                    }
                }}>
                    <Text style={styles.loginText} >CONNECTER</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigate('Register') }}>
                    <Text style={styles.signupText}>Creer un compte</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#0F1F02",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#e7e8e5",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    signupText: {
        color: "#0F1F02",
        fontWeight: 'bold',
    }
});

export default Login;