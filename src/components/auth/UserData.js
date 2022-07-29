import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Divider,
  VStack,
  Button,
  Icon,
  Flex,
  Box,
  Image,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash';
import useAuth from '../../hooks/useAuth';
import { getPokemonFavoriteApi } from '../../api/favorite';

const UserData = () => {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, []),
  );

  return (
    <Box backgroundColor="white" height="100%" justifyContent="center" safeArea>
      <Flex direction="row" marginX="6">
        <Text fontWeight="bold" fontSize="24">
          Bienvenid@,
        </Text>
        <Text fontWeight="400" fontSize="24" marginLeft={4}>
          {auth.username}
        </Text>
      </Flex>
      <View marginX={6}>
        <Image
          source={require('../../assets/welcome.png')}
          resizeMode="cover"
          alt="welcome"
          width="350"
          height="250"
        />
      </View>
      <VStack space={5} marginX="4" marginY="4">
        <Flex direction="row">
          <Icon
            as={MaterialIcons}
            name="person"
            size="md"
            mx="3"
            color="muted.400"
          />
          <Text
            color="gray.700"
            fontSize="16">{`${auth.firstName} ${auth.lastName}`}</Text>
        </Flex>
        <Divider />
        <Flex direction="row">
          <Icon
            as={MaterialIcons}
            name="person-outline"
            size="md"
            mx="3"
            color="muted.400"
          />
          <Text color="gray.700" fontSize="16">
            {auth.username}
          </Text>
        </Flex>
        <Divider />
        <Flex direction="row">
          <Icon
            as={MaterialIcons}
            name="email"
            size="md"
            mx="3"
            color="muted.400"
          />
          <Text color="gray.700" fontSize="16">
            {auth.email}
          </Text>
        </Flex>
        <Divider />
        <Flex direction="row">
          <Icon
            as={MaterialIcons}
            name="favorite"
            size="md"
            mx="3"
            color="muted.400"
          />
          <Text color="gray.700" fontSize="16">{`${total} Pokemons`}</Text>
        </Flex>
        <Divider />
        <Button borderRadius="50" size="lg" onPress={logout}>
          Desconectarse
        </Button>
      </VStack>
    </Box>
  );
};

export default UserData;
