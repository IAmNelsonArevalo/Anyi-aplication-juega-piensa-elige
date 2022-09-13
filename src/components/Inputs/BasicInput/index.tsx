import { IBasicInput } from "models/interfaces/components/Inputs"
import { FormControl, Input, Text } from "native-base";
import React, { FC } from "react"
import { Controller } from "react-hook-form"
import BasicInputStyles from "./BasicInput.style";

const BasicInput: FC<IBasicInput> = (props): JSX.Element => {
    const {
        name,
        rules,
        placeholder,
        control,
        label
    } = props;

    const InputComponent = (fieldInput: any) => {
        const { field, fieldState } = fieldInput;
        const { error } = fieldState;

        return (
            <>
                <Text style={BasicInputStyles.label}>
                    {label}
                </Text>
                <Input
                    variant="outline"
                    placeholder={placeholder}
                    onChangeText={(value: string) => field.onChange(value)}
                    value={field.value}
                    style={BasicInputStyles.inputs}
                />
                {
                    error && error.message && (
                        <Text style={BasicInputStyles.errorText}>{error.message}</Text>
                    )
                }
            </>
        )
    }

    return (
        <Controller
            control={control}
            name={name}
            render={InputComponent}
            rules={rules}
            defaultValue=""
        />
    )
}

export default BasicInput;