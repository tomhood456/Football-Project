import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const data1 = [
  { id: '1', title: 'My Teams' },
  // { id: '2', title: 'Championship' },
  // { id: '3', title: 'League 1' },
  // { id: '4', title: 'League 2' },
];


export default function Profile() {

  const handleClick = (title: any) => {
    if (title === 'My Teams') {
      router.push('/PremTeams'); 
    } else {
      Alert.alert(`You clicked on ${title}. This list is not available.`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Text style={styles.headerText}> *** Insert Table / Images ***</Text>
      </View>
      <View style={styles.headerBox}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.statsText}>32/92 | 35%</Text>
          <Text style={styles.statsText}> *** Insert Pie Chart ***</Text>
          <Text style={styles.headerText}>Stadiums Visited</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => handleClick(item.title)}
            >
              <Text style={styles.listItemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerBox: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  imageBox: {
    width: '100%',
    height: 200,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  headerText: {
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 20,
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
  headerTextContainer: {
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: '#333',
  },
});