import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'

export default function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {

    type RouteNames = 'index' | 'explore' | 'profile';

    const icon: Record<RouteNames, (props: any) => JSX.Element> = {
        index: (props: any) => <Feather name='home' size={24} color={'#222'} {...props}/>,
        explore: (props: any) => <Feather name='compass' size={24} color={'#222'} {...props}/>,
       profile: (props: any) => <Feather name='user' size={24} color={'#222'} {...props}/>,
    }
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {icon[route.name as RouteNames]({
                color: isFocused ? '#673ab7' : '#222'
            })}
            
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        paddingVertical: 12,
        paddingBottom: 22,
    },
    tabbarItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    }
})