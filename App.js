import React from 'react';
import { View } from 'react-native';
import PrincipalBanner from './src/components/PrincipalBanner';

class App extends React.Component {
  render() {
    return (
      <View>
        <PrincipalBanner title='Choose your pet' numberPet='+1000 pets' description='have not been adopted' />
      </View>
    );
  }
}     

export default App
