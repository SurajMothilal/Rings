import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { VictoryPie, VictoryLabel } from "victory-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FAB } from 'react-native-elements';


const CustomLabel = (props) => {
  return (
    <VictoryLabel {...props} />
  )
}

const CtHomeScreen = ({ onAddPress }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <View style={styles.mainContainer}>
          <View style={styles.chartContainer}>
              <VictoryPie
                  style={{ labels: { fill: "white" } }}
                  innerRadius={100}
                  labelRadius={120}
                  // labels={({ datum }) => `# ${datum.y}`}
                  labelComponent={<CustomLabel />}
                  data={[
                  { x: 0, y: 30, color: '#12345' },
                  { x: 1, y: 40 },
                  { x: 2, y: 55 },
                  ]}
                  width={250}
                  // colorScale={["tomato", "orange"]}
              />
          </View>
          <View style={styles.section}>
              <Text style={styles.headerText}>Expense</Text>
              <View style={styles.priceContainer}>
              <Text style={styles.headerText}>$23,450.00</Text>
              <TouchableOpacity><FontAwesome5 name={'caret-down'} style={styles.drawerIcon}/></TouchableOpacity>
              </View>
          </View>
          <View style={styles.lineDivider} />
          <View style={styles.section}>
              <Text style={styles.headerText}>Savings</Text>
              <View style={styles.priceContainer}>
              <Text style={styles.headerText}>$3,450.00</Text>
              <TouchableOpacity><FontAwesome5 name={'caret-down'} style={styles.drawerIcon}/></TouchableOpacity>
              </View>
          </View>
          <View style={styles.lineDivider} />
          <View style={styles.bottomButtonContainer}>
              <FAB
              icon={{ name: 'add', color: 'white' }}
              buttonStyle={styles.addButtonStyle}
              size="small"
              onPress={onAddPress}
              />
          </View>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center"
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: '5%', 
    marginTop: 10
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
    marginTop: 2
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
  buttonContainer: {
    flex: 1,
    marginHorizontal: '2%'
  },
  addButtonStyle: {
    backgroundColor: 'black'
  },
  mainContainer: {
    position: 'relative',
    height: '100%'
  },
  bottomButtonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 10,
    justifyContent: 'center'
  }
})

export default CtHomeScreen;
