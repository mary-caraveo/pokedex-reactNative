import React from 'react';
import { Platform } from 'react-native';
import { FlatList, Spinner } from 'native-base';
import PokemonCard from './PokemonCard';
import NoFavorites from './NoFavorites';

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;
  const flatListContentContainer = Platform.OS === 'android' ? 30 : 0;
  const spinner = Platform.OS === 'android' ? 90 : 60;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      flatListContentContainer={flatListContentContainer}
      backgroundColor="white"
      ListEmptyComponent={() => <NoFavorites />}
      height="100%"
      padding="1"
      ListFooterComponent={
        isNext && (
          <Spinner
            size="lg"
            spinner={spinner}
            color="emerald.500"
            marginTop="10"
            marginBottom="20"
          />
        )
      }
    />
  );
};

export default PokemonList;
