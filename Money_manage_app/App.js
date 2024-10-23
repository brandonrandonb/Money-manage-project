import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [week1, setWeek1] = useState('');  // State for week 1 input
  const [week2, setWeek2] = useState('');  // State for week 2 input
  const [goal, setGoal] = useState('');    // State for goal input
  const [result, setResult] = useState('');  // State for the result message
  const [goalMessage, setGoalMessage] = useState('');  // State for goal message

  // Function to calculate savings or spending
  const calculateSavings = () => {
    const moneyWeek1 = parseFloat(week1);  // Convert week 1 input to a number
    const moneyWeek2 = parseFloat(week2);  // Convert week 2 input to a number
    const savingGoal = parseFloat(goal);   // Convert goal input to a number

    if (!isNaN(moneyWeek1) && !isNaN(moneyWeek2)) {
      const difference = moneyWeek2 - moneyWeek1;

      if (difference > 0) {
        setResult(`Great job! You saved $${difference.toFixed(2)} this week!`);
      } else if (difference < 0) {
        setResult(`You spent $${Math.abs(difference).toFixed(2)} more this week. Try to save more next time!`);
      } else {
        setResult("You broke even this week.");
      }

      // Check if the goal input is valid
      if (!isNaN(savingGoal)) {
        const totalSavings = moneyWeek2; // Total savings so far
        const remaining = savingGoal - totalSavings;

        if (remaining > 0) {
          setGoalMessage(`You need to save $${remaining.toFixed(2)} more to reach your goal.`);
        } else {
          setGoalMessage(`You've reached your goal! You can spend $${Math.abs(remaining).toFixed(2)} for the rest of the month.`);
        }
      } else {
        setGoalMessage("Please enter a valid savings goal.");
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

      {/* Goal Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your savings goal for the month"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
      />

      {/* Button replaced with Pressable */}
      <Pressable style={styles.button} onPress={calculateSavings}>
        <Text style={styles.buttonText}>Check Savings</Text>
      </Pressable>

      {/* Display the result */}
      <Text style={styles.resultText}>{result}</Text>

      {/* Display the goal message */}
      <Text style={styles.goalText}>{goalMessage}</Text>
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
  goalText: {
    marginTop: 10,
    fontSize: 18,
    color: '#006400',
  },
  button: {
    backgroundColor: '#006400',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
