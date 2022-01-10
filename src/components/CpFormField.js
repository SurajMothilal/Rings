import React from "react";
import { Controller } from "react-hook-form";
import CpTextInput from './CpTextInput';

const CpFormField = ({
    control,
    required,
    placeholder,
    label,
    disabled,
    name
}) => {
    return (
        <Controller
            control={control}
            rules={{
                required: required
            }}
            render={({ field: { onChange } }) => (
                <CpTextInput
                    label={label}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    disabled={disabled}
                />
            )}
            name={name}
        />
    )
}

export default CpFormField;