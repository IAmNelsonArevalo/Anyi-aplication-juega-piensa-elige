import { StyleSheet } from "react-native";

const InstructionsStyles = StyleSheet.create({
    view: {
        position: "absolute",
        top: '1.5%',
        left: '5.5%',
        width: '89%',
        height: '85%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    subContent: {
       position: "absolute",
       display: "flex",
       justifyContent: "center"
    },
    title: {
        position: "absolute",
        marginTop: "10%",
        width: "100%"
    },
    title_text: {
        color: "white",
        fontWeight: "800",
        fontSize: 30,
        width: "60%",
        textAlign: "center",
        paddingTop: '5%',
        lineHeight: 30
    },
    description: {
        fontSize: 18,
        color: "white",
        marginTop: '10%',
        width: "80%",
        textAlign: "center"
    },
    button: {
        backgroundColor: '#7AC943',
        width: '50%',
        marginTop: '15%'
    },
    buttonText: {
        color: "white",
        fontWeight: "900",
        fontSize: 20
    }
});

export default InstructionsStyles;