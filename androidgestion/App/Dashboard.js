import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tableau de bord</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('GererDepenses')}
            >
                <Text style={styles.buttonText}>Gérer Dépenses</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('AfficherDepenses')}
            >
                <Text style={styles.buttonText}>Afficher Dépenses</Text>
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

export default Dashboard;
