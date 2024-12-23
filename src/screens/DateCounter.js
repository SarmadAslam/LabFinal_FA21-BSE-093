import React, { useState } from "react";
import { TextInput, Button, View, Text, StyleSheet } from "react-native";

function DateCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("2024-12-16");
    date.setDate(date.getDate() + count);

    const dec = () => {
        setCount((prevCount) => prevCount - step);
    };

    const inc = () => {
        setCount((prevCount) => prevCount + step);
    };

    const reset = () => {
        setCount(0);
        setStep(1);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={step.toString()}
                keyboardType="numeric"
                onChangeText={(newValue) => {
                    setStep(parseInt(newValue, 10) || 1); // Fallback to 1 if input is invalid
                }}
                placeholder="Step"
            />
            <Text style={styles.text}>Step: {step}</Text>
            <Button onPress={dec} title="Decrease" />
            <TextInput
                style={styles.input}
                value={count.toString()}
                keyboardType="numeric"
                onChangeText={(newValue) => {
                    setCount(parseInt(newValue, 10) || 0); // Fallback to 0 if input is invalid
                }}
                placeholder="Count"
            />
            <Button onPress={inc} title="Increase" />
            <Text style={styles.text}>Updated Date: {date.toDateString()}</Text>
            <Button onPress={reset} title="Reset" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "rgba(185, 221, 244, 0.8)", // Added background color for contrast
        flex: 1, // Makes sure the container takes full screen height
        justifyContent: "center", // Centers the content vertically
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc", // Light gray border
        borderRadius: 10, // Rounded corners for a smoother look
        marginBottom: 15, // Increased margin for spacing between inputs
        padding: 12, // Increased padding inside the input
        fontSize: 16, // Added font size for better readability
        shadowColor: "#000", // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.25, // Shadow transparency
        shadowRadius: 5, // Shadow blur effect
        elevation: 5, // Shadow for Android
    },
    text: {
        fontSize: 18, // Increased font size for better visibility
        marginVertical: 12, // Added more spacing between the text elements
        textAlign: "center", // Centers the text
        fontWeight: "bold", // Makes the text bolder
    },
    button: {
        marginTop: 10, // Adds spacing between the buttons
        // backgroundColor: "rgba(68, 74, 179, 0.8)", // Purple background for buttons
        borderRadius: 5, // Rounded corners for buttons
    },
});


export default DateCounter;
