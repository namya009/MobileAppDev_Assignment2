import React from 'react';
import Main from './Main';
import About from './About';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Main"
          options={{ drawerLabel: 'Main' }}
          component={Main} />
        <Drawer.Screen
          name="About"
          options={{ drawerLabel: 'About' }}
          component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
