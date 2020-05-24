import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import Detail from '../screens/DetailsScreen';
import Settings from '../screens/SettingsScreen';
import Search from '../screens/SearchScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='float'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={({ route }) => ({
            title: route.params.item.name,
          })}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name='Search'
          component={Search}
          options={{ title: 'Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
