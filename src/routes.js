import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import { navigationRef, isMountedRef } from './services/navigation';

const Stack = createStackNavigator();

export default function Routes() {
  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
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
