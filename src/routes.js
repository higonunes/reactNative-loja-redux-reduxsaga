import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="float"
        screenOptions={{
          header: (props) => <Header navigation={props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ gestureDirection: 'horizontal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
