import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
