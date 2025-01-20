import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatInputStyles";

interface BatInputProps {
  pass: string;
}

export function BatInput(props: BatInputProps) {
  return (
    <TextInput placeholder="pass" style={styles.inputer} value={props.pass} />
  );
}
