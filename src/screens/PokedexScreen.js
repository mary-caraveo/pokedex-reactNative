import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import {getPokemonApi} from '../api/pokemon';

export default function PokedexScreen() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    }) ()
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      console.log(response);
    } catch (error) {
      console.error("error");
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
