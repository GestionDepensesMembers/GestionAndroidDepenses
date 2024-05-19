import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ModifierDepenses = ({ navigation }) => {
    const [iddep, setIdDep] = useState('');
    const [montant, setMontant] = useState('');
    const [utilisateurId, setUtilisateurId] = useState('');
    const [datePaiement, setDatePaiement] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fonction pour récupérer les détails de la dépense par son ID
        const fetchExpenseDetails = async () => {
            try {
                const response = await axios.get(`http://192.168.0.195:7180/depense/${iddep}`);
                if (response.status === 200) {
                    const data = response.data;
                    setMontant(data.montant);
                    setUtilisateurId(data.utilisateur_id);
                    setDatePaiement(data.datedepaiement);
                    setDescription(data.description);
                    setType(data.type);
                } else {
                    console.error('Erreur lors de la récupération des détails de la dépense');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de la dépense:', error);
            }
        };

        fetchExpenseDetails(); // Appel de la fonction pour récupérer les détails de la dépense
    }, [iddep]); // Utilisation de 'iddep' comme dépendance

    // Fonction pour mettre à jour une dépense
    const handleUpdateExpense = async () => {
        try {
            const response = await axios.put(`http://192.168.0.195:7180/depense/update/${iddep}`, {
                montant,
                utilisateur_id: utilisateurId,
                datedepaiement: datePaiement,
                description,
                type
            });
            if (response.status === 200) {
                console.log('Dépense modifiée avec succès.');
                // Ajoutez ici toute logique de navigation supplémentaire si nécessaire
            } else {
                console.error('Erreur lors de la modification de la dépense.');
                setError('Erreur lors de la modification de la dépense.');
            }
        } catch (error) {
            console.error('Erreur lors de la modification de la dépense:', error);
            setError('Erreur lors de la modification de la dépense.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modifier une dépense</Text>
            <TextInput
                style={styles.input}
                placeholder="ID de la dépense"
                value={iddep}
                onChangeText={setIdDep}
                keyboardType="numeric"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Montant"
                value={montant}
                onChangeText={setMontant}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="ID de l'utilisateur"
                value={utilisateurId}
                onChangeText={setUtilisateurId}
                keyboardType="numeric"
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
            {error && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleUpdateExpense}
            >
                <Text style={styles.buttonText}>Modifier</Text>
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
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default ModifierDepenses;
