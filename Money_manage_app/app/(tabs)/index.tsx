import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState<string>(''); // Specify string type for input
  const [total, setTotal] = useState<number>(0); // Specify number type for total

  // Function to add the entered value to the total
  const addMoney = () => {
    const money = parseFloat(inputValue); // Convert input to a float
    if (!isNaN(money)) {
      setTotal(total + money); // Add the value to the total
      setInputValue(''); // Reset the input field
    } else {
      alert("Please enter a valid number!"); // Alert the user for invalid input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Money Manager</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={text => setInputValue(text)} // Update inputValue state
      />
      <Button title="Add" onPress={addMoney} /> {/* Button to add money */}
      <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text> {/* Display total */}
    </View>
  );
}

// Styling for the app


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccffcc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  totalText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});