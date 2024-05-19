import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const SupprimerDepenses = () => {
    const [iddep, setIddep] = useState('');

    const handleDeleteExpense = async () => {
        if (!iddep) {
            Alert.alert('Erreur', 'Veuillez saisir l\'ID de la dépense à supprimer');
            return;
        }

        try {
            const response = await fetch(`http://192.168.0.195:7180/depense/delete/${iddep}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Alert.alert('Succès', 'Dépense supprimée avec succès');
                // Ajoutez ici toute logique supplémentaire après la suppression réussie
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage || 'Erreur lors de la suppression de la dépense');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de la dépense:', error);
            Alert.alert('Erreur', 'Erreur lors de la suppression de la dépense');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Supprimer Dépenses</Text>
            <TextInput
                style={styles.input}
                placeholder="ID de la dépense"
                keyboardType="numeric"
                value={iddep}
                onChangeText={setIddep}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleDeleteExpense}
            >
                <Text style={styles.buttonText}>Supprimer</Text>
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
        backgroundColor: '#ff0000',
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

export default SupprimerDepenses;
