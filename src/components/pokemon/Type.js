import React from 'react';
import { View, Text } from 'native-base';
import { map, capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

const Type = (props) => {
  const { types } = props;

  return (
    <View
      marginTop="4"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      {map(types, (item, index) => (
        <View
          borderRadius="20"
          paddingX="35"
          paddingY="2"
          marginX="4"
          backgroundColor={getColorByPokemonType(item.type.name)}
          key={index}
        >
          <Text color="white" bold={true}>
            {capitalize(item.type.name)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Type;
