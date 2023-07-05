import React from "react";
import { FileSearch } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export function ChatRoom() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Grupos</Text>
        <FileSearch size={32} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: RFPercentage(20),
    backgroundColor: "#1f6be1",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 18
  },
  headerTitle: {
    fontSize: RFValue(32),
    color: "#ffffff",
    fontWeight: "bold"
  }
});
