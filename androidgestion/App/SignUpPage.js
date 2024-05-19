import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SignUpPage = ({ navigation }) => {
    const [solde, setSolde] = useState('');
    const [dtn, setDtn] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await fetch('http://192.168.0.195:7180/utilisateurs/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    solde: parseFloat(solde),
                    dtn,
                    email,
                    motDepasse: motDePasse,
                    nom,
                    prenom
                })
            });

            if (response.ok) {
                Alert.alert('Inscription réussie');
                navigation.navigate('Dashboard'); // Navigue vers le tableau de bord après l'inscription
            } else {
                Alert.alert('Erreur lors de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            Alert.alert('Erreur lors de l\'inscription');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inscription</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Solde"
                    keyboardType="numeric"
                    value={solde}
                    onChangeText={setSolde}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date de naissance"
                    value={dtn}
                    onChangeText={setDtn}
                />
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
                <TextInput
                    style={styles.input}
                    placeholder="Nom"
                    value={nom}
                    onChangeText={setNom}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Prénom"
                    value={prenom}
                    onChangeText={setPrenom}
                />
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleSignUp}
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

export default SignUpPage;
