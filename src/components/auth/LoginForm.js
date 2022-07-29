import React, { useState } from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Box, Image } from 'native-base';
import {
  KeyboardAvoidingView,
  View,
  Text,
  Input,
  Stack,
  FormControl,
  Icon,
  Button,
} from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

const LoginForm = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('');
      const { username, password } = formValue;

      if (username != user.username || password !== user.password) {
        setError('El usuario o la contraseña no son correctos');
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <KeyboardAvoidingView
      backgroundColor="white"
      height="100%"
      h={{
        base: '100%',
        lg: 'auto',
      }}
      behavior={behavior}
      enabled>
      <Box safeArea={true}>
        <Image
          source={require('../../assets/account.png')}
          resizeMode="cover"
          alt="account"
          width="400"
          height="250"
        />
        <View paddingX="25">
          <Text fontSize="26" fontWeight="bold" marginTop="30" marginBottom="8">
            Iniciar sesión
          </Text>
          <Stack space={4} marginBottom="10">
            <FormControl isInvalid={!!formik.errors.username}>
              <Input
                variant="underlined"
                placeholder="Nombre de usuario"
                fontSize="14"
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}
                InputLeftElement={
                  <Icon
                    as={MaterialIcons}
                    name="person"
                    size="md"
                    mx="3"
                    color="muted.400"
                  />
                }
              />
              <FormControl.ErrorMessage>
                {formik.errors.username}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formik.errors.password}>
              <Input
                variant="underlined"
                placeholder="Contraseña"
                fontSize="14"
                autoCapitalize="none"
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
                InputLeftElement={
                  <Icon
                    as={MaterialIcons}
                    name="lock"
                    size="md"
                    mx="3"
                    color="muted.400"
                  />
                }
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Icon
                    as={MaterialIcons}
                    name={show ? 'visibility' : 'visibility-off'}
                    size={5}
                    mr="2"
                    color="muted.400"
                    onPress={() => setShow(!show)}
                  />
                }
              />
              <FormControl.ErrorMessage>
                {formik.errors.password}
              </FormControl.ErrorMessage>
            </FormControl>
          </Stack>
          <Button
            borderRadius="50"
            size="lg"
            title="Ingresar"
            onPress={formik.handleSubmit}>
            Ingresar
          </Button>
          <Text textAlign="center" marginTop="20" color="red.500">
            {error}
          </Text>
        </View>
      </Box>
    </KeyboardAvoidingView>
  );
};

function initialValues() {
  return {
    username: '',
    password: '',
  };
}

function validationSchema() {
  return {
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  };
}

export default LoginForm;
