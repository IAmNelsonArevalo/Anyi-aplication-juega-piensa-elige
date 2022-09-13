import { StyleSheet } from "react-native";

const WelcomeStyles = StyleSheet.create({
    view: {
        position: "absolute",
        top: '4%',
        left: '4.5%',
        width: '91%',
        height: '77.5%',
    },
    title: {
        marginTop: '5%',
        height: 40
    },
    title_text: {
        fontSize: 40,
        paddingTop: '2%',
        textTransform: 'uppercase',
        color: "#F0AD1A",
        fontWeight: "900"

    },
    titleContent: {
        marginTop: '4%',
        paddingHorizontal: '10%'

    },
    tabsContent: {
        marginTop: '3%',
        paddingHorizontal: '10%'
    },
    title_text2: {
        color: "grey",
        fontWeight: "800",
        fontSize: 30,
        paddingTop: '5%',
        lineHeight: 30
    },
    title_text3: {
        color: "grey",
        width: "50%",
        fontSize: 25,
        paddingTop: '5%',
        lineHeight: 30
    },
});

export default WelcomeStyles;