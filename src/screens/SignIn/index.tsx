import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { CaretLeft } from "phosphor-react-native";

export function SignIn() {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />

      <View style={styles.header}>
        <CaretLeft size={32} color="#000" />
        <Text style={styles.headerTitle}>Faça Login</Text>
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
  }
});