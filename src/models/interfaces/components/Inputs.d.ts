import { Control } from "react-hook-form";

export interface IBasicInput {
    name: string;
    control: Control;
    rules: any;
    errors?: any;
    placeholder: string;
    label: string;
}