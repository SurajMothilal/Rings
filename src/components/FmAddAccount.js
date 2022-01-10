import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm } from "react-hook-form";
import {
    currencyCodes,
    accountName,
    currentBalance,
    buttonNames,
    currency,
    buttonTypes
} from '../constants';
import CpButton from './CpButton';
import CpFormField from './CpFormField';

const FmAddAccount = ({ onCancel }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            accountName: '',
            initialAmount: '',
            currency: currencyCodes.CANADIAN_DOLLAR
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <View style={styles.container}>
            <CpFormField
                control={control}
                name='accountName'
                placeholder='Enter an account name'
                label={accountName}
                required
            />
            <CpFormField
                control={control}
                name='initialAmount'
                placeholder='0.00'
                label={currentBalance}
                required
            />
             <CpFormField
                control={control}
                name='currency'
                placeholder={currencyCodes.CANADIAN_DOLLAR}
                label={currency}
                disabled
            />
            <CpButton
                title={buttonNames.addAccountButton}
                onPress={handleSubmit(onSubmit)}
                buttonType={buttonTypes.PRIMARY}
            />
             <CpButton
                title={buttonNames.cancel}
                onPress={onCancel}
                buttonType={buttonTypes.SECONDARY}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: '1%',
        marginTop: '25%'
    }
})

export default FmAddAccount;