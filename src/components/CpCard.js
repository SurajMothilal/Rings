import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'react-native-elements';

const CpCard = ({ children, containerStyle = {} }) => {
    return (
        <View style={{
            ...styles.cardContainer,
            ...containerStyle
        }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        flex: 1,
        backgroundColor: colors.white,
        margin: '2%'
    }
})

export default CpCard