import React from 'react';
import { Input } from 'react-native-elements';
import { colours } from '../constants';

const CpTextInput = (props) => {
    const labelProps = {
        ...props.labelProps,
        style: {
            color: colours.primary
        }
    }
    return (
        <Input {...props} labelProps={labelProps} />
    )
}

export default CpTextInput;