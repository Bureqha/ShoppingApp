import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreens from './screens/HomeScreens';
import Product from './screens/Product';
import Order from './screens/Order';

const Stack = createStackNavigator();

function App() {
 return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >         
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
 );
}

export default App;