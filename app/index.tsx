import { Team } from "@/interfaces/interfaces";
import { Link, useRouter } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleTeamSelection = (team: Team) => {
    router.push({
      pathname: `/[team]/[color]/team`,
      params: { team: team.name, color: team.color },
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pick your team</Text>
      {teams.map((team) => (
        <TouchableOpacity
          key={team.name}
          style={[styles.button, { backgroundColor: team.color }]}
          onPress={() => handleTeamSelection(team)}
        >
          <Text style={styles.buttonText}>
            {team.name.charAt(0).toUpperCase() + team.name.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const teams: Team[] = [
  { name: "blue", color: "#1E90FF" },
  { name: "red", color: "#c90404" },
  { name: "green", color: "#0ec904" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  text: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  button: {
    width: "60%",
    height: "20%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
