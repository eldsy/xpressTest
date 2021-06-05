import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';

class Detail extends Component {

    currentTime = () => {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        if (hours < 10) hours = '0' + hours
        if (minutes < 10) minutes = '0' + minutes
        return hours + ':' + minutes;
    }

    render() {
        const { type, data } = this.props.route.params;
        const user = type == 'user';
        const resource = type == 'resource';

        console.log(data)
        return (
            <View>
                <View style={styles.buttonsection}>
                    {user && (
                        <View style={styles.buttonicon}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                            />
                            <Text>Prenom </Text>
                            <Text style={styles.buttonicontext}>{data.first_name}</Text>

                            <Text>Nom </Text>
                            <Text style={styles.buttonicontext}>{data.last_name}</Text>

                            <Text>Email </Text>
                            <Text style={styles.buttonicontext}>{data.email}</Text>


                        </View>
                    )}
                    {resource && (
                        <View style={styles.buttonicon}>
                            <Text>Color </Text>
                            <Text style={[{color:data.color}, styles.buttonicontext]}>{data.color}</Text>

                            <Text>Nom </Text>
                            <Text style={styles.buttonicontext}>{data.name}</Text>

                            <Text>Pantone value </Text>
                            <Text style={styles.buttonicontext}>{data.pantone_value}</Text>

                            <Text>Annee</Text>
                            <Text style={styles.buttonicontext}>{data.year}</Text>


                        </View>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonsection: {
        flexDirection: 'column',
        margin: 15,
        borderRadius: 10,
    },
    buttonicontext: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    buttonicon: {
        borderColor: '#C0C0C0',
        borderLeftWidth: 0.5,
        justifyContent: 'center',
        backgroundColor: 'white',
        fontSize: 60,
        padding: 20,
        paddingTop: 20,
        paddingBottom: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    iamge: {
        width: 50,
        height: 70,
    }
});


export default Detail