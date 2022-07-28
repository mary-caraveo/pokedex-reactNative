import React from 'react';
import { View, Text, Image } from 'native-base';

const NoFavorites = () => {
  return (
    <View backgroundColor="white" height="100%">
      <View paddingTop={2}>
        <Image
          source={require('../assets/favorite.png')}
          resizeMode="cover"
          alt="No favorite"
          width="400"
          height="350"
        />
      </View>
      <View paddingHorizontal={30}>
        <Text
          textAlign="center"
          marginBottom={2}
          fontSize="18"
          fontWeight="bold">
          Aún no hay elementos guardados
        </Text>
        <Text textAlign="center" marginBottom="6">
          Selecciona tu pokemon favorito para verlo en esta sección.
        </Text>
      </View>
    </View>
  );
};

export default NoFavorites;
