import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/global";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

function HomeScreen({ navigation }) {
  return (
    <View
      style={globalStyles.container}

      // source={require("../assets/background2.png")}
    >
      <Text style={styles.header}>Selamat Datang di Halaman Utama</Text>
      <Image source={require("../assets/logo-unima.jpg")} style={styles.logo} />
      <Text style={styles.description}>Ini adalah halaman utama aplikasi.</Text>
      <TouchableOpacity
        style={{
          padding: Spacing * 2,
          backgroundColor: Colors.primary,
          marginVertical: Spacing,
          borderRadius: Spacing,
          shadowColor: Colors.primary,
          shadowOffset: {
            width: 0,
            height: Spacing,
          },
          shadowOpacity: 0.3,
          shadowRadius: Spacing,
        }}
        title="Logout"
        onPress={() => {
          navigation.replace("Login");
        }}
      >
        <Text style={{ color: "#fff" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 50,
  },
  profileButton: {
    marginBottom: 20,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 8,
  },
});

export default HomeScreen;
