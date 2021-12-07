import React, { useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addPokemonsFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  const addFavorite = async () => {
    try {
      await addPokemonsFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = () => {
    console.log("Eliminar de favoritos");
  };

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  return (
    <Icon
      name="heart"
      color="red"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
