import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ResultsShowScreen from '../screens/ResultsShowScreen';
import Search from '../screens/SearchScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' headerMode='float'>
        <Stack.Screen
          name='Search'
          component={Search}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen
          name='ResultsShowScreen'
          component={ResultsShowScreen}
          options={{ title: 'Title' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
