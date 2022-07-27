import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'native-base';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

const Header = (props) => {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);

  return (
    <>
      <View
        width="100%"
        height="405"
        backgroundColor={color}
        position="absolute"
        borderBottomEndRadius="300"
        borderBottomLeftRadius="300"
        style={styles.bg}
      />
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="90"
        marginX="5">
        <Text color="white" fontWeight="bold" fontSize="28">
          {capitalize(name)}
        </Text>
        <Text color="white" fontWeight="bold">
          #{`${order}`.padStart(3, 0)}
        </Text>
      </View>
      <View flex={1} justifyContent="center" alignItems="center" top="25">
        <Image
          width="250"
          height="300"
          resizeMode="contain"
          source={{ uri: image }}
          alt={capitalize(name)}
        />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  bg: {
    transform: [{ scaleX: 2 }],
  },
});
