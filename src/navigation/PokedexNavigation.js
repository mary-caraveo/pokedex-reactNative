import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: 'Lista Pokemons', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
