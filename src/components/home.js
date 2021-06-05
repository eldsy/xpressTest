import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

class Home extends Component {

    currentTime = () => {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        if (hours < 10) hours = '0' + hours
        if (minutes < 10) minutes = '0' + minutes
        return hours + ':' + minutes;
    }

    render() {
        const {navigation} = this.props

        return (
            <View>
                <View style={styles.sectionTitleView}>
                        <Text style={styles.sectionTitle}>Bienvenue</Text>
                        <Text style={styles.sectionTitleHour}>
                            {this.currentTime()}
                        </Text>
                </View>
                <View style={styles.buttonsection}>
                    <TouchableNativeFeedback onPress={() => { navigation.navigate('UserList')}}>
                        <View style={styles.buttonicon}>

                            <Text style={styles.buttonicontext}>USERS</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => { navigation.navigate('ResourceList') }}>
                        <View style={styles.buttonicon}>
                            <Text style={styles.buttonicontext}>RESSOURCES</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => { navigation.navigate('PDFExample') }}>
                        <View style={styles.buttonicon}>
                            <Text style={styles.buttonicontext}>voir PDF</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 19,
        color: 'white',
        alignItems: 'center',
    },
    sectionTitleHour: {
        fontSize: 40,
        color: '#F6842B',
    },
    buttonsection: {
        flexDirection: 'column',
        height: 300,
        margin: 15,
        borderRadius: 10,
        marginTop: -35,
    },
    buttonicontext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0F1F02',
    },
    buttonicon: {
        flex: 0.35,
        borderColor: '#C0C0C0',
        borderLeftWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        fontSize: 60,
        margin: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    sectionTitleView: {
        backgroundColor: '#0F1F02',
        paddingTop: '13%',
        paddingBottom: '13%',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: "column",
        alignItems: 'center',
    }
});


export default Home