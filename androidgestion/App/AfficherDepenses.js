import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const AfficherDepenses = ({ navigation }) => {
    const [depenses, setDepenses] = useState([]);

    useEffect(() => {
        const fetchDepenses = async () => {
            try {
                const response = await fetch('http://192.168.0.195:7180/depense');
                const data = await response.json();
                setDepenses(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des dépenses :', error);
            }
        };

        fetchDepenses();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des Dépenses</Text>
            <FlatList
                data={depenses}
                keyExtractor={(item) => item.iddep.toString()}
                renderItem={({ item }) => (
                    <View style={styles.depenseItem}>
                        <Text>Montant: {item.montant}</Text>
                        <Text>Date de paiement: {item.datedepaiement}</Text>
                        <Text>Description: {item.description}</Text>
                        <Text>Type: {item.type}</Text>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Text style={styles.buttonText}>Retour</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    depenseItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AfficherDepenses;
