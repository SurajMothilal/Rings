import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { buttonTypes, colours } from '../constants';

const CpButton = ({
    buttonType,
    ...otherProps
}) => {
    let buttonStyle
    let type
    let titleProps = {
        ...otherProps.titleProps
    }
    if (buttonType === buttonTypes.PRIMARY) {
        buttonStyle = styles.primary
        type = 'solid'
    } else if (buttonType === buttonTypes.SECONDARY) {
        buttonStyle = styles.secondary
        type = 'outline'
        titleProps = {
            ...titleProps,
            style: {
                color: colours.primary
            }
        }
    }
    return (
        <Button
            {...otherProps}
            {...(buttonStyle ? { buttonStyle } : {})}
            type={type}
            titleProps={titleProps}
        />
    )
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: colours.primary,
        marginBottom: 15,
        marginHorizontal: 5
    },
    secondary: {
        borderColor: colours.secondary,
        marginBottom: 15,
        marginHorizontal: 10
    }
})

export default CpButton;