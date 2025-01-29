// AllTeams.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useTeamContext } from './TeamContext';

const allTeamsData = [
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
  const { addTeam } = useTeamContext();

  const handleClick = (team: { id: string, name: string }) => {
    addTeam(team);
    Alert.alert(`You added ${team.name} to your teams!`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={allTeamsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleClick(item)}
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
});
