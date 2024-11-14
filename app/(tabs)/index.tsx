import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const data1 = [
  { id: '1', title: 'Premier League' },
  { id: '2', title: 'Championship' },
  { id: '3', title: 'League 1' },
  { id: '4', title: 'League 2' },
];

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


export default function Profile() {
  const [showList, setShowList] = useState(false);

  const handleClick = (title: any) => {
    if (title === 'Premier League') {
      setShowList(true); 
    } else {
      Alert.alert(`You clicked on ${title}. This list is not available.`);
    }
  };

  const goBack = () => {
    setShowList(false);
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
        {!showList ? (
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
        ) : (
          <FlatList
            data={data2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.listItem}
                onPress={goBack}
              >
                <Text style={styles.listItemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}
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