import { StyleSheet } from "react-native";
import { display, marginLeft, marginTop } from "styled-system";

const Nivel23Styles = StyleSheet.create({
    view: {
        position: "absolute",
        top: '4.3%',
        left: '4.5%',
        width: '91%',
        height: '77%',
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
    },
    titleContent: {
        marginTop: '3%',
    },
    
    image: {
        width: "50%",
        display: "flex"
    },
    image2: {
       width: "50%"

    },
    
});

export default Nivel23Styles;