// import { Tabs } from 'expo-router';
// import React from 'react';

// const TabLayout = () => {
//   return(
//     <Tabs />  
//   )
// }

// export default TabLayout;

import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TabBar from '@/components/TabBar'

const _layout = () => {
    return (
        <View style={styles.container}>
          <Tabs tabBar={props => <TabBar {...props} /> }>
          <Tabs.Screen name='index' options={{ title: 'Home',  /* headerShown: false, */ }}/>
          <Tabs.Screen name='explore' options={{ title: 'Map' ,  /* headerShown: false, */}}/>
          <Tabs.Screen name='profile' options={{ title: 'Profile',   /* headerShown: false, */ }}/>
        </Tabs>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      padding: 0,   
      margin: 0, 
    },
  });

export default _layout