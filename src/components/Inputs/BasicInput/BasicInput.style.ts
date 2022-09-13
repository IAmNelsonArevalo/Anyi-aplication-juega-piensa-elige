import { StyleSheet } from "react-native";

const BasicInputStyles = StyleSheet.create({
    errorText: {
        color: "#A00750"
    },
    label: {
        fontSize: 15,
        textTransform: "uppercase",
        color: '#A00750',
        paddingBottom: "3%"
    },
    inputs: {
        borderRadius: 10,
        borderColor: "#A00750",
        borderWidth: 2
    }
});

export default BasicInputStyles;