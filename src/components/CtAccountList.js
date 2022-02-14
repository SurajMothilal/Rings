import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SectionList
} from 'react-native';
import CpCard from './CpCard';
import { accountType } from '../constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const renderItem = ({ item }) => {
  return (
    <View style={[styles.section, styles.itemContainer]} key={item.id}>
      <Text style={styles.accountTitle}>{item.name}</Text>
      <Text style={styles.accountTotal}>${item.amount}</Text>
    </View>
  )
}

const renderAccountList = (accountList) => {
  return (
    <SectionList
        sections={accountList}
        renderItem={renderItem}
        renderSectionHeader={({ section: { type, total } }) => {
          const title = type === accountType.ASSET ? accountType.ASSET : accountType.LIABILITY
          return (
            <>
              <View style={styles.section}>
                    <Text style={styles.headerText}>{title}</Text>
                    <View style={styles.priceContainer}>
                    <Text style={styles.headerText}>${total}</Text>
                    <TouchableOpacity><FontAwesome5 name={'caret-down'} style={styles.drawerIcon}/></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineDivider} />
            </>
          )
        }}
        ItemSeparatorComponent={() => <View style={styles.itemLineDivider} />}
        keyExtractor={item => item.id}
      />
  )
}

const curateList = (accountList, assetTotal, liabilitiesTotal) => {
  const assetList = accountList.filter((i) => i.type === accountType.ASSET)
  const liabilitiesList = accountList.filter((i) => i.type === accountType.LIABILITY)
  const curatedList = [
    {
      ...(assetList.length > 0 ? {
        type: accountType.ASSET,
        total: assetTotal,
        data: assetList
      } : {})
    },
    {
      ...(liabilitiesList.length > 0 ? {
        type: accountType.LIABILITY,
        total: liabilitiesTotal,
        data: liabilitiesList
      } : {})
    }
  ]

  return curatedList.filter((i) => Object.keys(i).length > 0)
}

const CtAccountList = ({
    accountList,
    assetTotal,
    liabilitiesTotal
}) => {
    return (
        <>
            {renderAccountList(curateList(accountList, assetTotal, liabilitiesTotal))}
        </>
    )
}

const styles = StyleSheet.create({
    section: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: '5%',
      textAlign: 'right',
      marginTop: 10,
    },
    accountTitle: {
      fontSize: 17,
      color: 'black',
      width: '60%',
      marginBottom: 10
    },
    accountTotal: {
      fontSize: 17,
      color: 'black',
      width: '30%',
      marginBottom: 10,
      textAlign: 'right'
    },
    totalContainer: {
      textAlign: 'right'
    },
    headerText: {
      fontSize: 20,
      fontFamily: 'serif',
      fontWeight: 'bold',
      color: 'black'
    },
    lineDivider: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginHorizontal: '5%',
      marginTop: 2,
      marginBottom: 5
    },
    itemLineDivider: {
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 1,
      marginHorizontal: '5%',
      marginTop: 2,
      marginBottom: 4
    },
    itemContainer: {
      paddingHorizontal: 5
    },
    priceContainer: {
      flexDirection: 'row'
    },
    drawerIcon: {
      fontSize: 30,
      color: 'black',
      paddingLeft: '2%',
      top: -2
    },
    cardContainer: {
      borderRadius: 10
    }
  })

export default CtAccountList