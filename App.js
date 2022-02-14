import React from 'react';
import NvApp from './src/navigation/NvApp';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const App = () => {
  return (
    <NvApp />
  );
};

export default App;
