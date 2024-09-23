import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pick your team</Text>
      {/* <TouchableOpacity
        style={[styles.button, styles.button1]}
        onPress={() => alert("Button 1 pressed")}
      >
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.button2]}
        onPress={() => alert("Button 2 pressed")}
      >
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity> */}
      {teams.map((team) => (
        <TouchableOpacity
          key={team.name}
          style={[styles.button, { backgroundColor: team.color }]}
          onPress={() => alert("Button pressed!")}
        >
          <Text style={styles.buttonText}>
            {team.name.charAt(0).toUpperCase() + team.name.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const teams = [
  { name: "blue", color: "#1E90FF" },
  { name: "red", color: "#c90404" },
  // { name: "green", color: "#0ec904" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333", // Dark gray background
  },
  text: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  button: {
    width: "60%", // Button width relative to screen
    height: "20%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10, // Space between buttons
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
