import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();
import Incidents from './pages/incidents'
import Detail from './pages/Detail'

function Routes() {
    return (
      <NavigationContainer>
        <appStack.Navigator screenOptions={{headerShown:false}}>
          <appStack.Screen name="Incidents" component={Incidents} />
          <appStack.Screen name="Detail" component={Detail} />
        </appStack.Navigator>
      </NavigationContainer>
    );
  }

  export default Routes;