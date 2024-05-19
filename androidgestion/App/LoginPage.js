import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://192.168.0.195:7180/utilisateurs/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    motDepasse: motDePasse
                })
            });

            if (response.ok) {
                const utilisateur = await response.json();
                Alert.alert('Connexion réussie');
                // Vous pouvez enregistrer les informations de connexion ici, par exemple dans AsyncStorage
                navigation.navigate('Dashboard'); // Navigue vers le tableau de bord après la connexion réussie
            } else {
                Alert.alert('Identifiants incorrects');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            Alert.alert('Erreur lors de la connexion');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                    value={motDePasse}
                    onChangeText={setMotDePasse}
                />
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('SignUpPage')} // Navigue vers la page d'inscription
            >
                <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    buttonContainer: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LoginPage;
