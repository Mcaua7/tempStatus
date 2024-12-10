import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function App() {
  const [randomIndex, setRadomIndex] = useState();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [temperature, setTeperature] = useState("");
  const [dailySumary, setDailySumary] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [press, setPress] = useState(false);

  useEffect(() => {
    const infos = require("./data.json");
    console.log("resultado final: ", infos[1]);
    setRadomIndex(parseInt(Math.random() * 16));
    console.log(randomIndex);
    if (infos && randomIndex) {
      console.log("index", randomIndex);
      const data = infos[randomIndex];
      console.log("data", data);
      setCity(data.city);
      setState(data.state);
      setDate(data.date);
      setTeperature(data.temperature);
      setDailySumary(data.daily_summary);
      setWind(data.wind);
      setHumidity(data.humidity);
      setVisibility(data.visibility);
    }
    setPress(false);
  }, [press]);

  const handlePressed = () => {
    setPress(true);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePressed}>
      <View style={styles.city}>
        <Text style={styles.textCity}>
          {city} - {state}
        </Text>
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{temperature}</Text>
      </View>
      <View style={styles.dailySumary}>
        <Text style={styles.dailySumaryText}>Resumo Diário:</Text>
        <Text style={styles.dailySumaryText}>{dailySumary}</Text>
      </View>
      <View style={styles.moreInfo}>
        <View style={styles.viewInfo}>
          <FontAwesome6 name="wind" size={30} color="#F9F93B" />
          <Text style={styles.textInfo}>{wind}</Text>
          <Text style={styles.descripition}>Vento</Text>
        </View>
        <View style={styles.viewInfo}>
          <MaterialIcons name="waves" size={30} color="#F9F93B" />
          <Text style={styles.textInfo}>{humidity}</Text>
          <Text style={styles.descripition}>Humidade</Text>
        </View>
        <View style={styles.viewInfo}>
          <FontAwesome5 name="eye" size={30} color="#F9F93B" />
          <Text style={styles.textInfo}>{visibility}</Text>
          <Text style={styles.descripition}>Visibilidade</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F93B",
    alignItems: "center",
  },
  city: {
    paddingTop: 80,
    padding: 30,
  },
  textCity: {
    fontSize: 25,
    fontWeight: "bold",
  },
  date: {
    borderWidth: 1,
    height: "7%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "black",
  },
  dateText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  temperature: {
    height: "40%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  temperatureText: {
    fontWeight: "bold",
    fontSize: 120,
  },
  dailySumary: {
    height: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
  },
  dailySumaryText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  moreInfo: {
    borderWidth: 1,
    width: "90%",
    height: "10%",
    marginTop: 50,
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    borderRadius: 10,
    backgroundColor: "black",
  },
  viewInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInfo: {
    color: "#F9F93B",
    fontWeight: "bold",
  },
  descripition: {
    color: "#F9F93B",
  },
});
