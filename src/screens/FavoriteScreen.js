import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { getPokemonFavoriteApi } from '../api/favorite';

export default function FavoriteScreen() {
  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
  }

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}

