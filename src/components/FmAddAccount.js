import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { API } from 'aws-amplify'
import { useForm } from "react-hook-form";
import {
    currencyCodes,
    accountName,
    currentBalance,
    buttonNames,
    currency,
    buttonTypes,
    accountType
} from '../constants';
import { apiConfig } from '../helpers/apiHelper';
import CpButton from './CpButton';
import CpFormField from './CpFormField';

const FmAddAccount = ({ onCancel, onSuccess }) => {
    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            accountName: '',
            currentBalance: '',
            currency: currencyCodes.CANADIAN_DOLLAR
        }
    });
    const { isSubmitting, isSubmitSuccessful } = formState;
    const onSubmit = async data => {
        const { apiName, accountPath } = apiConfig
        const payload = {
            body: {
                type: accountType.ASSET,
                name: data.accountName,
                currency: data.currency,
                amount: parseInt(data.currentBalance).toFixed(2),
                user_id: 'userid',
                institution_id: 'inst_id'
            }
        }

        return await API.post(apiName, accountPath, payload)
    };

    useEffect(() => {
        if(isSubmitSuccessful) {
            onSuccess();
        }
    }, [isSubmitSuccessful])
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
                name='currentBalance'
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
                loading={isSubmitting}
                disabled={isSubmitting}
            />
             <CpButton
                title={buttonNames.cancel}
                onPress={onCancel}
                buttonType={buttonTypes.SECONDARY}
                disabled={isSubmitting}
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