import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function team() {
  const { team, color }: { team: string; color: string } =
    useLocalSearchParams();
  return (
    <View style={[styles.container, { backgroundColor: color.toString() }]}>
      <Text style={styles.text}>Welcome to the {team} team.</Text>
      <Text style={styles.text}>
        You can lock your phone, but keep this page up.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});
