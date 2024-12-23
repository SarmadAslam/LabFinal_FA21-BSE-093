import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";

const QuizApp = () => {
  const quizData = {
    questions: [
      {
        question: "Which is the most popular JavaScript framework?",
        options: ["Angular", "React", "Svelte", "Vue"],
        correctOption: 1,
        points: 10,
      },
      {
        question: "Which company invented React?",
        options: ["Google", "Apple", "Netflix", "Facebook"],
        correctOption: 3,
        points: 10,
      },
      {
        "question": "What's the fundamental building block of React apps?",
        "options": ["Components", "Blocks", "Elements", "Effects"],
        "correctOption": 0,
        "points": 10
      },
      {
        "question": "What's the name of the syntax we use to describe the UI in React components?",
        "options": ["FBJ", "Babel", "JSX", "ES2015"],
        "correctOption": 2,
        "points": 10
      },
      {
        "question": "How does data flow naturally in React apps?",
        "options": [
          "From parents to children",
          "From children to parents",
          "Both ways",
          "The developers decides"
        ],
        "correctOption": 0,
        "points": 10
      },
      {
        "question": "How to pass data into a child component?",
        "options": ["State", "Props", "PropTypes", "Parameters"],
        "correctOption": 1,
        "points": 10
      },
      {
        "question": "When to use derived state?",
        "options": [
          "Whenever the state should not trigger a re-render",
          "Whenever the state can be synchronized with an effect",
          "Whenever the state should be accessible to all components",
          "Whenever the state can be computed from another state variable"
        ],
        "correctOption": 3,
        "points": 30
      },
      {
        "question": "What triggers a UI re-render in React?",
        "options": [
          "Running an effect",
          "Passing props",
          "Updating state",
          "Adding event listeners to DOM elements"
        ],
        "correctOption": 2,
        "points": 20
      },
      {
        "question": "When do we directly \"touch\" the DOM in React?",
        "options": [
          "When we need to listen to an event",
          "When we need to change the UI",
          "When we need to add styles",
          "Almost never"
        ],
        "correctOption": 3,
        "points": 20
      },
      {
        "question": "In what situation do we use a callback to update state?",
        "options": [
          "When updating the state will be slow",
          "When the updated state is very data-intensive",
          "When the state update should happen faster",
          "When the new state depends on the previous state"
        ],
        "correctOption": 3,
        "points": 30
      },
      {
        "question": "If we pass a function to useState, when will that function be called?",
        "options": [
          "On each re-render",
          "Each time we update the state",
          "Only on the initial render",
          "The first time we update the state"
        ],
        "correctOption": 2,
        "points": 30
      },
      {
        "question": "Which hook to use for an API request on the component's initial render?",
        "options": ["useState", "useEffect", "useRef", "useReducer"],
        "correctOption": 1,
        "points": 10
      },
      {
        "question": "Which variables should go into the useEffect dependency array?",
        "options": [
          "Usually none",
          "All our state variables",
          "All state and props referenced in the effect",
          "All variables needed for clean up"
        ],
        "correctOption": 2,
        "points": 30
      },
      {
        "question": "An effect will always run on the initial render.",
        "options": [
          "True",
          "It depends on the dependency array",
          "False",
          "In depends on the code in the effect"
        ],
        "correctOption": 0,
        "points": 30
      },
      {
        "question": "When will an effect run if it doesn't have a dependency array?",
        "options": [
          "Only when the component mounts",
          "Only when the component unmounts",
          "The first time the component re-renders",
          "Each time the component is re-rendered"
        ],
        "correctOption": 3,
        "points": 20
      }
      // Add remaining questions here...
    ],
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleNext = () => {
    if (selectedOption !== null) {
      // Check if the selected option is correct
      if (selectedOption === currentQuestion.correctOption) {
        setScore((prevScore) => prevScore + currentQuestion.points);
      }

      // Move to the next question or end quiz
      if (currentQuestionIndex < quizData.questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
      } else {
        setIsQuizComplete(true);
      }
    } else {
      alert("Please select an option before proceeding!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!isQuizComplete ? (
        <View>
          <Text style={styles.question}>
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </Text>
          {currentQuestion.options.map((option, index) => (
            <View key={index} style={styles.optionContainer}>
              <RadioButton
                value={index}
                status={selectedOption === index ? "checked" : "unchecked"}
                onPress={() => setSelectedOption(index)}
              />
              <Text style={styles.optionText}>{option}</Text>
            </View>
          ))}
          <Button title="Next" onPress={handleNext} />
        </View>
      ) : (
        <View>
          <Text style={styles.resultText}>Quiz Completed!</Text>
          <Text style={styles.scoreText}>Your Score: {score}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default QuizApp;
