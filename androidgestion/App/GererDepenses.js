import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GererDepenses = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gérer Dépenses</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('AjouterDepenses')}
            >
                <Text style={styles.buttonText}>Ajouter Dépenses</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('ModifierDepenses')} 
            >
                <Text style={styles.buttonText}>Modifier Dépenses</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('AfficherDepenses')}
            >
                <Text style={styles.buttonText}>Afficher Dépenses</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('SupprimerDepenses')}
            >
                <Text style={styles.buttonText}>Supprimer Dépenses</Text>
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

export default GererDepenses;
