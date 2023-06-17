import React from "react";
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
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
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "#000" }}>
          HeyChat
        </Text>

        <Text style={{ fontSize: 18, color: "#000", marginBottom: 24 }}>
          Ajude, colabore, faça networking
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            placeholderTextColor={"#000"}
          />

          <TextInput
            style={styles.inputs}
            placeholder="Senha"
            placeholderTextColor={"#000"}
          />

          <TouchableOpacity activeOpacity={0.6} style={styles.formButton}>
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20, letterSpacing: 1.4 }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{ textAlign: "center", color: "#000", fontSize: 18, fontWeight: "300" }}>
              Não tem uma conta? crie sua{"\n"} conta agora!
            </Text>
          </TouchableOpacity>
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
    marginHorizontal: 24,
    marginBottom: 36
  },
  form: {
    width: "100%",
  },
  inputs: {
    width: "100%",
    height: 56,
    marginBottom: 20,
    color: "#000",
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    borderRadius: 6
  },
  formButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#1f6be1",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14
  }
});
