import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Team {
  id: string;
  name: string;
}

const TeamContext = createContext<{
  myTeamsData: Team[];
  addTeam: (team: Team) => void;
} | null>(null);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [myTeamsData, setMyTeamsData] = useState<Team[]>([]);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@myTeamsData');
        if (jsonValue != null) {
          setMyTeamsData(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Failed to load teams data from AsyncStorage', e);
      }
    };

    loadTeams();
  }, []);

  const addTeam = (team: Team) => {
    setMyTeamsData((prevTeams) => {
      const newTeams = [...prevTeams, team];
      AsyncStorage.setItem('@myTeamsData', JSON.stringify(newTeams));
      return newTeams;
    });
  };

  return (
    <TeamContext.Provider value={{ myTeamsData, addTeam }}>
      {children}
    </TeamContext.Provider>
  );
}

export function useTeamContext() {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeamContext must be used within a TeamProvider');
  }
  return context;
}

