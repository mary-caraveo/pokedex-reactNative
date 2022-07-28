import React from 'react';
import { View, Text } from 'native-base';
import { map, capitalize } from 'lodash';

const Stats = (props) => {
  const { stats } = props;

  const barStyles = (num) => {
    const color = num > 49 ? '#00ac17' : '#ff3e3e';
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View paddingX="6" marginTop="7" marginBottom="10">
      <Text fontWeight="bold" fontSize="20" paddingBottom="2">
        Base Stats
      </Text>
      {map(stats, (item, index) => (
        <View key={index} flexDirection="row" paddingY="3.2">
          <View width="30%">
            <Text fontSize="12" color="#6b6b6b">
              {capitalize(item.stat.name)}
            </Text>
          </View>
          <View width="70%" flexDirection="row" alignItems="center">
            <Text width="12%" fontSize="12">
              {item.base_stat}
            </Text>
            <View
              backgroundColor="#dedede"
              width="88%"
              height="1.5"
              borderRadius="20"
              overflow="hidden"
            >
              <View
                height="1.5"
                borderRadius="20"
                style={[barStyles(item.base_stat)]}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Stats;
