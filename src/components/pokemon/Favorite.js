import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addPokemonsFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
  const { id } = props;
  const addFavorite = async () => {
    await addPokemonsFavoriteApi(id);
  };

  return (
    <Icon
      name="heart"
      color="white"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
