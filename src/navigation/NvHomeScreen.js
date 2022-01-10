import React from 'react';
import CtHomeScreen from '../components/CtHomeScreen';

const NvHomeScreen = ({ navigation }) => {
  const onAddPress = () => navigation.navigate('AddAccount');
  return (
    <CtHomeScreen onAddPress={onAddPress} />
  );
};

export default NvHomeScreen;
