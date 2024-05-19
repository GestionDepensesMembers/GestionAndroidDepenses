import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AjouterDepenses = () => {
    const [montant, setMontant] = useState('');
    const [utilisateurId, setUtilisateurId] = useState('');
    const [datePaiement, setDatePaiement] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const handleAddExpense = async () => {
        try {
            const response = await fetch('http://192.168.0.195:7180/depense/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    montant,
                    iduser: utilisateurId,
                    datePaiement,
                    description,
                    type
                })
            });

            if (response.ok) {
                Alert.alert('Dépense ajoutée avec succès');
            } else {
                Alert.alert('Erreur lors de l\'ajout de la dépense');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la dépense:', error);
            Alert.alert('Erreur lors de l\'ajout de la dépense');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajouter Dépenses</Text>
            <TextInput
                style={styles.input}
                placeholder="Montant"
                keyboardType="numeric"
                value={montant}
                onChangeText={setMontant}
            />
            <TextInput
                style={styles.input}
                placeholder="ID de l'utilisateur"
                keyboardType="numeric"
                value={utilisateurId}
                onChangeText={setUtilisateurId}
            />
            <TextInput
                style={styles.input}
                placeholder="Date de paiement"
                value={datePaiement}
                onChangeText={setDatePaiement}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Type"
                value={type}
                onChangeText={setType}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleAddExpense}
            >
                <Text style={styles.buttonText}>Ajouter</Text>
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        width: '100%',
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

export default AjouterDepenses;
