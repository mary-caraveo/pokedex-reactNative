import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Button, Text } from 'native-base';

const NoLogged = () => {
  const navigation = useNavigation();

  return (
    <View backgroundColor="white" height="100%">
      <View paddingTop={2}>
        <Image
          source={require('../assets/warning.png')}
          resizeMode="cover"
          style={{ width: 400, height: 300 }}
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
          Para ver esta sección es necesario iniciar sesión
        </Text>
        <Button
          title="Iniciar sesión"
          borderRadius="50"
          size="lg"
          onPress={() => navigation.navigate('Account')}>
          Iniciar sesión
        </Button>
      </View>
    </View>
  );
};

export default NoLogged;
