import React from 'react';
import { View } from 'react-native';
import PrincipalBanner from './src/components/PrincipalBanner';
import CategoryPet from './src/components/CategoryPet';

class App extends React.Component {
  render() {
    return (
      <View>
        <PrincipalBanner title='Choose your pet' numberPet='+1000 pets' description='have not been adopted' />
        <CategoryPet />
      </View>
    );
  }
}     

export default App
