import { StyleSheet } from "react-native";

const AlertStyles = StyleSheet.create({
    view: {
        position: "absolute",
        width: "102%",
        height: "103%",
        left: "-1.2%",
        top: "-1.5%"
    },
    button: {
        height: "100%",
        position: "relative",
        padding: "0%",
        backgroundColor: "transparent",

    },
    image: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    background: {
        flex: 1,
        resizeMode: "cover",
    }
});

export default AlertStyles;