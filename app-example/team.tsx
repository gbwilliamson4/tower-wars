import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const team = () => {
  const { name, color } = useLocalSearchParams();
  return (
    <View>
      <Text>team</Text>
    </View>
  );
};

export default team;
