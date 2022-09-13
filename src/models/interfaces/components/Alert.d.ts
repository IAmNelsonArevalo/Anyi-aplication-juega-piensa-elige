export interface IAlertProps {
    type: "success" | "error" | "timeout";
    level: "level1" | "level2" | "level3";
    question: "question1" | "question2" | "question3" | "question4";
    show: boolean;
    navigation: any;
    view: string;
}