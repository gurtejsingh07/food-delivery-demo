import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MenuItems from '../screens/menuItems';
import Cart from '../screens/Cart';
import SearchModal from '../screens/searchModal';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MenuItems"
        screenOptions={{
          gestureEnabled: true,
          headerShown: true,
        }}>
        <Stack.Group>
          <Stack.Screen name="Menu Items" component={MenuItems} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="SearchBar" component={SearchModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
