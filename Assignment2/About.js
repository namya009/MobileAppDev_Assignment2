import React from 'react';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';

 const About= ({ navigation }) => {
  return (
    
    <SafeAreaView style= {{backgroundColor : '#cfe2f4',}}>
      <View>
          <Text style={styles.Text}>
            Namya Vipulkumar Patel 
          </Text>
          <Text style={styles.Text}>
            101281322
          </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    Text:{
        fontSize  : 30 ,
        margin : 20,
        textAlign: 'center',
        color : '#2f9f72'
    }
  });

export default About;