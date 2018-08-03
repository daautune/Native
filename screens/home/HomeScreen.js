import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title= 'go to profile'
        onPress={()=>this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

export default HomeScreen
