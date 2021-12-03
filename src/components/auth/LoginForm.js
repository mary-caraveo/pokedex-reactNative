import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native';
import { log } from 'react-native-reanimated';

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button title="Ingresar" onPress={() => console.log("Ingresando")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  }
});