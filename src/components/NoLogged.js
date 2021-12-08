import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.textTitle}>Aún no hay elementos guardados</Text>
      <Text style={styles.text}>
        Para ver esta sección es necesario iniciar sesión
      </Text>
      <Button
        style={styles.btn}
        title="Iniciar sesión"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: "1",
    marginVertical: 50,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  textTitle: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  btn: {
    padding: 25,
  },
});