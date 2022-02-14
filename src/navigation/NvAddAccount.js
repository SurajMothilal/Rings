import React from "react";
import FmAddAccount from "../components/FmAddAccount";

const NvAddAccount = ({ navigation, route }) => {
    const { onBack } = route?.params;
    const handleCancel = () => navigation.goBack()
    const handleSuccess = () => {
        navigation.goBack();
        onBack();
    }
    return <FmAddAccount onCancel={handleCancel} onSuccess={handleSuccess} />
}

export default NvAddAccount;