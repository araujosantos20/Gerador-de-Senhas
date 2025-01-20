import React, { useState } from "react";
import { Button, View, Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyles";
import { BatInput } from "../batinput/BatInput";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGeneratePass() {
    setPass("Olá");
  }
  return (
    <>
      <BatInput pass={pass} />
      <Pressable style={styles.button} onPress={handleGeneratePass}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => console.log("Fui pressionado")}
      >
        <Text style={styles.text}>☀ Copy</Text>
      </Pressable>
    </>
  );
}
