

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/home';
import UserList from '../components/userList';
import ResourceList from '../components/resourceList'
import Detail from '../components/detail';
import Login from '../components/login';
import PDFExample from '../components/pdfExemple';
import register from '../components/register';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Connexion' }}
                />

                <Stack.Screen
                    name="Register"
                    component={register}
                    options={{ title: 'Register' }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={{ title: 'Liste des utilisateurs' }}
                />
                <Stack.Screen
                    name="ResourceList"
                    component={ResourceList}
                    options={{ title: 'Liste des ressources' }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{ title: 'Detail' }}
                />

                <Stack.Screen
                    name="PDFExample"
                    component={PDFExample}
                    options={{ title: 'PDF' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation