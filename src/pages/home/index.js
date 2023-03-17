import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Change Page"
        onPress={() => navigation.navigate('NewsScreen')}
      />
    </View>
  );
};

export default HomeScreen;
