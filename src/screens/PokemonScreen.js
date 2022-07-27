import React, { useState, useEffect } from 'react';
import { View } from 'native-base';
import { getPokemonDetailsApi } from '../api/pokemon';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';
import Favorite from '../components/pokemon/Favorite';
import useAuth from '../hooks/useAuth';

const PokemonScreen = (props) => {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="white"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View height="100%" backgroundColor="white">
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </View>
  );
};

export default PokemonScreen;
