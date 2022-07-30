import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/FavoriteScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitle: 'Favoritos',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ headerTitle: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
