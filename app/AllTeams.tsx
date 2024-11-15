import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Modal, Pressable, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const data2 = [
    { id: '1', name: 'Arsenal' },
    { id: '2', name: 'Aston Villa' },
    { id: '3', name: 'Bournemouth' },
    { id: '4', name: 'Brentford' },
    { id: '5', name: 'Brighton & Hove Albion' },
    { id: '6', name: 'Chelsea' },
    { id: '7', name: 'Crystal Palace' },
    { id: '8', name: 'Everton' },
    { id: '9', name: 'Fulham' },
    { id: '10', name: 'Ipswich Town' },
    { id: '11', name: 'Leicester City' },
    { id: '12', name: 'Liverpool' },
    { id: '13', name: 'Manchester City' },
    { id: '14', name: 'Manchester United' },
    { id: '15', name: 'Newcastle United' },
    { id: '16', name: 'Nottingham Forest' },
    { id: '17', name: 'Southampton' },
    { id: '18', name: 'Tottenham Hotspur' },
    { id: '19', name: 'West Ham United' },
    { id: '20', name: 'Wolverhampton Wanderers' },
];

export default function AllTeamsScreen() {

    const handleClick = (team: any) => {
        Alert.alert(`You clicked on ${team}` );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleClick(item.name)}
                    >
                        <Text style={styles.listItemText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        padding: 20,
    },
    listItem: {
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    listItemText: {
        fontSize: 18,
        color: '#333',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 100,
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
});
