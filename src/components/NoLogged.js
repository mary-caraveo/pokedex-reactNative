import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta sección es necesario iniciar sesión
      </Text>
      <Button title="Ir al login" onPress={() => navigation.navigate("Account")} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 30,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});