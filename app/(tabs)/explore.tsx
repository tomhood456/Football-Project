// import { Tabs } from 'expo-router';
// import React from 'react';
// import { View, Text } from 'react-native'

// const Page = () => {
//   return(
//     <View>
//       <Text>Explore</Text>
//     </View>
//   )
// }

// export default Page;

import React, { useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, Alert } from 'react-native'
import { markers } from '@/assets/markers';



const INITIAL_REGION= {
    latitude: 52.3555,
    longitude: -1.1743,
    latitudeDelta: 5,     // Zoom level to cover only England (smaller delta zooms in)
    longitudeDelta: 5,    // Adjust to match zoom level with latitude
  };

  const onMarkerSelected = (marker: any) => {
    Alert.alert(marker.name);
  };


export default function Explore() {
    return (
        <>
        <View style={styles.container} >
          <MapView style={StyleSheet.absoluteFill} region={INITIAL_REGION} >
             {markers.map((marker, index) => (
              <Marker key={index} coordinate={marker} onPress={() => onMarkerSelected(marker)} />
           ))}
          </MapView>
        </View>
        </>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    addText:{
    },
    addWrapper:{
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      bottom: 200,
      left: 150
    }
  })
