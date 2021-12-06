import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { getPokemonsFavoriteApi } from '../api/favorite';

export default function FavoriteScreen() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
  }

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}

