import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './App/LoginPage';
import SignUpPage from './App/SignUpPage';
import Dashboard from './App/Dashboard';
import AjouterDepenses from './App/AjouterDepenses';
import ModifierDepenses from './App/ModifierDepenses';
import AfficherDepenses from './App/AfficherDepenses';
import AfficherDepensesPage from './App/AfficherDepenses';
import GererDepenses from './App/GererDepenses';
import SupprimerDepenses from './App/SupprimerDepenses';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Tableau de bord' }} />
                <Stack.Screen name="GererDepenses" component={GererDepenses} options={{ title: 'Gérer Dépenses' }} />
                <Stack.Screen name="AjouterDepenses" component={AjouterDepenses} options={{ title: 'Ajouter Dépenses' }} />
                <Stack.Screen name="ModifierDepenses" component={ModifierDepenses} options={{ title: 'Modifier Dépenses' }} />
                <Stack.Screen name="SupprimerDepenses" component={SupprimerDepenses} options={{ title: 'Supprimer Dépenses' }} />
                <Stack.Screen name="AfficherDepenses" component={AfficherDepenses} options={{ title: 'Afficher Dépenses' }} />
                <Stack.Screen name="AfficherDepensesPage" component={AfficherDepensesPage} options={{ title: 'Afficher Dépenses Page' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
