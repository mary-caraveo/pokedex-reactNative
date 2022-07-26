import React from 'react';
import { View, Text, Image, Pressable } from 'native-base';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import { capitalize } from 'lodash';
import { useNavigation } from '@react-navigation/core';

const PokemonCard = (props) => {
  const { pokemon } = props;
  const navigation = useNavigation();
  const pokemonColor = getColorByPokemonType(pokemon.type);

  const goToPokemon = () => {
    navigation.navigate('Pokemon', { id: pokemon.id });
  };

  return (
    <Pressable width="50%" onPress={goToPokemon}>
      <View flex={1} height="130">
        <View flex={1} padding="1">
          <View
            backgroundColor={pokemonColor}
            flex={1}
            borderRadius="15"
            padding="2">
            <Text position="absolute" right="3" top="2" color="white">
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text color="white" fontSize="12" paddingTop="2">
              {capitalize(pokemon.name)}
            </Text>
            <Image
              position="absolute"
              bottom="1"
              right="2"
              width="90"
              height="90"
              source={{ uri: pokemon.image }}
              alt={pokemon.name}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PokemonCard;
