import React from 'react';
import { StyleSheet, Text, TextInput, View , Dimensions, FlatList, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import HomeScreen from '@home/HomeScreen'
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from '@profile/ProfileScreen'

const Stack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  Setting: SettingScreen
})
export default class App extends React.Component {

  state = {
    value:''
  }
  onChangeText = (text) => {
    console.log('text', text)
    this.setState({ value: text})
  }

  render() {
    let width = Dimensions.get('window').width
    return (
      // <View style={styles.container}>
      //   <Text style={{color: 'yellow'}}>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      //   <TextInput
      //     value={this.state.value}
      //     onChangeText={this.onChangeText}
      //     style= {{borderColor: '#ccc', borderWidth: 1, width: width- 20}}
      //   />
      //   <FlatList
      //     keyExtractor={(item, index) => index.toString()}
      //     data={['1','3','1']}
      //     renderItem={({item, index}) => {
      //       return <Text key={index.toString()}>{item}</Text>
      //     }}
      //   />
      //   <TouchableWithoutFeedback>
      //     <View>
      //       <Text>Hellllo </Text>
      //     </View>
      //   </TouchableWithoutFeedback>
      // </View>
      <Stack
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  //  alignSelf: 'flex-start',

  },
});
