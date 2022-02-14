import React from 'react';
import CtHomeScreen from '../components/CtHomeScreen';

const NvHomeScreen = ({ navigation }) => {
  const onAddPress = (callback) => navigation.navigate('AddAccount', {
    onBack: callback
  });
  return (
    <CtHomeScreen onAddPress={onAddPress} />
  );
};

export default NvHomeScreen;
