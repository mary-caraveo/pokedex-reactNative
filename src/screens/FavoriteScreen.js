import React, { useState, useCallback } from 'react';
import { Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonFavoriteApi } from '../api/favorite';
import { getPokemonDetailsApi } from '../api/pokemon';
import useAuth from '../hooks/useAuth';
import PokemonList from '../components/PokemonList';

export default function FavoriteScreen() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          const pokemonsArray = [];

          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? (
    <Text>Usuario no logueado</Text>
  ) : (
    <PokemonList pokemons={pokemons} />
  );
}

