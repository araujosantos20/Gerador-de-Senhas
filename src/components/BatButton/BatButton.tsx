import React, { useState } from "react";
import { Button, View, Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyles";
import { BatInput } from "../batinput/BatInput";
import generatorPassword from "../../services/generatorPass";
import * as Clipboard from "expo-clipboard";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGeneratePass() {
    let generateToken = generatorPassword();
    setPass(generateToken);
  }

  function handleCopyPass() {
    Clipboard.setStringAsync(pass);
  }
  return (
    <>
      <BatInput pass={pass} />
      <Pressable style={styles.button} onPress={handleGeneratePass}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCopyPass}>
        <Text style={styles.text}>☀ Copy</Text>
      </Pressable>
    </>
  );
}
