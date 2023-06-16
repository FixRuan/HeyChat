import React from "react";
import { StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
import { CaretLeft } from "phosphor-react-native";

export function SignIn() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />

      <View style={styles.header}>
        <CaretLeft size={32} color="#000" weight="bold" />
        <Text style={styles.headerTitle}>Faça Login</Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "#000" }}>HeyChat</Text>
        <Text style={{ fontSize: 18, color: "#000", marginBottom: 24 }}>Ajude, colabore, faça networking</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            placeholderTextColor={"red"}
          />
          <TextInput style={styles.inputs} placeholder="Senha" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginLeft: 12
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24
  },
  form: {
    width: "100%",
  },
  inputs: {
    width: "100%",
    height: 56,
    marginBottom: 24,
    color: "#000",
  }
});