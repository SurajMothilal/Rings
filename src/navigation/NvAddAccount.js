import React from "react";
import FmAddAccount from "../components/FmAddAccount";

const NvAddAccount = ({ navigation }) => {
    const handleCancel = () => navigation.goBack()
    return <FmAddAccount onCancel={handleCancel} />
}

export default NvAddAccount;