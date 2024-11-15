import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Modal, Pressable, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const data2 = [
    { id: '1', name: 'Arsenal' },
    { id: '2', name: 'Aston Villa' },
];

export default function TeamsScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleClick = (title: any) => {
        setModalVisible(true);
    };

    if (modalVisible === true) {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={styles.centeredView}>
                    <Modal>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text>I visited this Stadium !</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }

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
