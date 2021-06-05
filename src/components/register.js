import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, } from 'react-native';
import ModalErrorView from './modalErrorView';
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';
import axios from 'axios';


class Register extends Component {
    
    state = {
        email: "",
        password: "",
        passwordConf: "",
        loading: false,
        registerError: false,
    }

    getButtonBackgroundColor = () => {
        if (this.state.email != "" && this.state.password != "" && this.state.passwordConf != "")
            return '#0f1f02';
        else return '#b7bbb3';
    }

    closeModal = () => {
        this.setState({ registerError: false });
    };

    register(user) {
        this.setState({loading: true});
        axios.post('https://reqres.in/api/register', user)
        .then(res => {
            console.log(res);
            this.props.navigation.navigate('Home');
            this.setState({loading: false});
        })
        .catch(error => {
            console.log(error);
            this.setState({loading: false});
            this.setState({ registerError: true });
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
                <Modal isVisible={this.state.registerError}>
                    <ModalErrorView closeModal={this.closeModal} message={'Une erreur est survenu lors de la creation'} />
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
                        placeholder="Mot de passe ..."
                        placeholderTextColor="#0F1F02"
                        onChangeText={text => {
                            this.setState({ password: text });
                        }}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Confirmer mot de passe..."
                        placeholderTextColor="#0F1F02"
                        onChangeText={text => this.setState({ passwordConf: text })} />
                </View>
                <TouchableOpacity style={[{ backgroundColor: this.getButtonBackgroundColor() }, styles.registerBtn]} onPress={() => {
                    let user = { email: this.state.email, password: this.state.password };
                    if (user.email != "" && user.password  != "" && user.password == this.state.passwordConf) {
                        this.register(user);                    
                    }
                    else if(user.password != this.state.passwordConf) alert('Les mots de passe ne sont pas idendique');
                }}>
                    <Text style={styles.registerText} >CREER</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.goBack() }}>
                    <Text style={styles.signupText}>Se connecter</Text>
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
    registerBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    registerText: {
        color: "white"
    },
    signupText: {
        color: "#0F1F02",
        fontWeight: 'bold',
    }
});


export default Register