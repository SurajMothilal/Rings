import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { VictoryPie, VictoryLabel } from "victory-native";
import { FAB } from 'react-native-elements';
import CtAccountList from './CtAccountList';
import { get, apiConfig } from '../helpers/apiHelper';
import { accountType, colors } from '../constants';
import CpCard from './CpCard';

const calculateTotals = (list, type) => {
    const filteredList = list.filter((item) => item.type === type)
    let total = 0;
    filteredList.forEach((item) => {
      total = parseInt(total) + parseInt(item.amount)
    })
    return total.toFixed(2)
}

const getData = async (
  setAccountList,
  setAssetTotal,
  setLiabilitiesTotal
) => {
  const callback = (results) => {
      setAccountList(results.data);
      setAssetTotal(calculateTotals(results.data, accountType.ASSET));
      setLiabilitiesTotal(calculateTotals(results.data, accountType.LIABILITY));
  }
  const { apiName, accountPath } = apiConfig;
  await get(apiName, accountPath, {}, callback);
}

const CustomLabel = (props) => {
  return (
    <VictoryLabel {...props} />
  )
}

const renderAccountList = (
  accountList = [],
  assetTotal,
  liabilitiesTotal
) => {
  if (accountList.length > 0) {
    return (
      <CtAccountList
        accountList={accountList}
        assetTotal={assetTotal}
        liabilitiesTotal={liabilitiesTotal}
      />
    )
  } else {
    <Text>No Data</Text>
  }
}

const CtHomeScreen = ({ onAddPress }) => {
  const [accountList, setAccountList] = useState([]);
  const [assetTotal, setAssetTotal] = useState(0);
  const [liabilitiesTotal, setLiabilitiesTotal] = useState(0)
  const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
  const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
    getData(setAccountList, setAssetTotal, setLiabilitiesTotal);
  }, [])

  const onBack = () => {
    getData(setAccountList, setAssetTotal, setLiabilitiesTotal);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <View style={styles.mainContainer}>
            <CpCard containerStyle={styles.cardStyle}>
              <View style={styles.chartContainer}>
                  <VictoryPie
                    animate={{ easing: 'exp' }}
                    style={{ labels: { fill: "white" } }}
                    innerRadius={100}
                    labelRadius={120}
                    // labels={({ datum }) => `# ${datum.y}`}
                    labelComponent={<CustomLabel />}
                    // data={[
                    //   { x: 0, y: 10 },
                    //   { x: 1, y: 40 },
                    //   { x: 2, y: 55 },
                    // ]}
                    data={graphicData}
                    width={250}
                    colorScale={[colors.green, colors.purple, colors.red]}
                  />
              </View>
              {renderAccountList(accountList, assetTotal, liabilitiesTotal)}
              <View style={styles.bottomButtonContainer}>
                  <FAB
                    icon={{ name: 'add', color: 'white' }}
                    buttonStyle={styles.addButtonStyle}
                    size="small"
                    onPress={() => onAddPress(onBack)}
                  />
              </View>
            </CpCard>
         </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: '2%'
  },
  addButtonStyle: {
    backgroundColor: 'black'
  },
  mainContainer: {
    position: 'relative',
    height: '100%',
    backgroundColor: colors.cream
  },
  cardStyle: {
    marginTop: '5%'
  },  
  bottomButtonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 10,
    justifyContent: 'center'
  }
})

export default CtHomeScreen;
