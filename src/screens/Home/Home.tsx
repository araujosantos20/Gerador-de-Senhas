import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Styles from "./Style";
import { Menu } from "../../components/Menu/Menu";
import { Batlogo } from "../../components/batlogo/BatLogo";
import { BatInput } from "../../components/batinput/BatInput";
import styles from "./Style";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  return (
    <View style={Styles.appContainer}>
      <View style={Styles.logoContainer}>
        <Batlogo />
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
