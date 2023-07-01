import React, { useState } from "react";

import {
  StatusBar,
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from "react-native";

import { CaretLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    navigation.navigate("ChatRoom");
  }

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
            value={email}
            style={styles.inputs}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={"#99999b"}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            value={password}
            style={styles.inputs}
            secureTextEntry={true}
            placeholder="Senha"
            placeholderTextColor={"#99999b"}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity activeOpacity={0.6} style={styles.formButton} onPress={handleSignIn}>
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20, letterSpacing: 1.4 }}>
              Acessar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={handleSignUp}>
            <Text style={{ textAlign: "center", color: "#000", fontSize: 18, fontWeight: "300" }}>
              Crie sua conta!
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
    borderColor: "#99999b",
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
