import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [week1, setWeek1] = useState('');  // State for week 1 input
  const [week2, setWeek2] = useState('');  // State for week 2 input
  const [result, setResult] = useState('');  // State for the result message

  // Function to calculate savings
  const calculateSavings = () => {
    const moneyWeek1 = parseFloat(week1);  // Convert week 1 input to a number
    const moneyWeek2 = parseFloat(week2);  // Convert week 2 input to a number

    if (!isNaN(moneyWeek1) && !isNaN(moneyWeek2)) {
      if (moneyWeek2 > moneyWeek1) {
        setResult("Great job! You saved money this week!");  // Week 2 is greater, user saved
      } else if (moneyWeek2 < moneyWeek1) {
        setResult("You spent more this week. Try to save more next time!");  // Week 2 is less, user spent more
      } else {
        setResult("You broke even this week.");  // Week 1 and Week 2 are equal
      }
    } else {
      setResult("Please enter valid numbers for both weeks.");  // Handle invalid input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Money Tracker</Text>

      {/* Week 1 Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Week 1 total money"
        keyboardType="numeric"
        value={week1}
        onChangeText={setWeek1}
      />

      {/* Week 2 Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Week 2 total money"
        keyboardType="numeric"
        value={week2}
        onChangeText={setWeek2}
      />

      {/* Button to calculate savings */}
      <Button title="Check Savings" onPress={calculateSavings} />

      {/* Display the result */}
      <Text style={styles.resultText}>{result}</Text>
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
  resultText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
