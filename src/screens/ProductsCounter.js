import React, { useReducer } from "react";
import { TextInput, Button } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
    switch (action.type) {
        case "dec":
            return { ...state, count: state.count - state.step };
        case "inc":
            return { ...state, count: state.count + state.step };
        case "setCount":
            return { ...state, count: action.payload };
        case "setStep":
            return { ...state, step: action.payload };
        case "reset":
            return initialState;
        default:
            throw new Error("unknown action");
    }
}

function ProductsCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    const date = new Date("2024-12-16");
    date.setDate(date.getDate() + count);

    return (
        <View style={styles.container}>
            <TextInput
                label="Step"
                value={step.toString()}
                keyboardType="numeric"
                onChangeText={(newValue) => {
                    dispatch({ type: "setStep", payload: parseInt(newValue, 10) || 1 });
                }}
                style={styles.input}
            />
            <Text style={styles.text}>Current Step: {step}</Text>
            <Button onPress={() => dispatch({ type: "dec" })} mode="contained" style={styles.button}>
                Decrease
            </Button>
            <TextInput
                label="Count"
                value={count.toString()}
                keyboardType="numeric"
                onChangeText={(newValue) => {
                    dispatch({ type: "setCount", payload: parseInt(newValue, 10) || 0 });
                }}
                style={styles.input}
            />
            <Button onPress={() => dispatch({ type: "inc" })} mode="contained" style={styles.button}>
                Increase
            </Button>
            <Text style={styles.text}>Updated Date: {date.toDateString()}</Text>
            <Button onPress={() => dispatch({ type: "reset" })} mode="contained" style={styles.button}>
                Reset
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // justifyContent: "center",
        backgroundColor: "rgba(214, 187, 221, 0.8)",
    },
    input: {
        marginBottom: 15,
        backgroundColor: "white",
        borderRadius:16,
        shadowColor: "#000",  // Color of the shadow (black)
        shadowOffset: { width: 0, height: 2 },  // Horizontal and vertical offsets
        shadowOpacity: 0.25,  // Shadow opacity (transparency)
        shadowRadius: 3.5,  // Blur radius of the shadow
        elevation: 5,  // Shadow for Android
    },
    button: {
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
    },
});

export default ProductsCounter;
