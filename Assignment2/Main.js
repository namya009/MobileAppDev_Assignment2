import React, { Component } from 'react';
import { Button , Alert } from "react-native";
import {Text,View,TextInput , Switch , StyleSheet} from "react-native";

export default class Main extends Component {
    constructor() {
      super();
      this.state = {
        size: '',
        flooring_price: '' ,
        installation_cost: '',
        show : false,
        enabled:false,
      };
      this.handleSize = this.handleSize.bind(this);
      this.handleFlooring = this.handleFlooring.bind(this);
      this.handleInsta = this.handleInsta.bind(this);
    }
  onPress = () => {
      this.setState
      ({
        show : true
      })
  };

  
  handleSize = (input) => {
      this.setState({ size: input })
  }
  handleFlooring = (input) => {
      this.setState({ flooring_price: input })
  }
  handleInsta = (input) => {
      this.setState({ installation_cost: input })
  }
  

  calcFlooring() {
     return parseFloat((this.state.size*this.state.flooring_price).toFixed(2));
  }

  calcInstallation() {
    return parseFloat((this.state.size*this.state.installation_cost).toFixed(2));   
 }

 calcTotal(){
  return parseFloat((this.calcFlooring() + this.calcInstallation()).toFixed(2));   
 }

 calcTax(){
  return parseFloat((this.calcTotal() * 0.13).toFixed(2));  
 }

    render() {
      let message , message2, input, questionMsg
      const enabled = this.state.isEnabled;
      if(enabled){
        message = <Text style = {styles.Text}>
                Switch to square feet?
              </Text>
        message2 = 'per square meter'
        input = <TextInput style = {styles.TextInput}
                      name = "size" 
                      numeric value 
                      keyboardType ={'numeric'} value = {this.state.size}
                      placeholder='squre meter'
                      onChangeText={this.handleSize}
                    />
                    questionMsg =  <Text style = {styles.Text}>
                  Size of room in squremeter : 
                </Text>
      }
      else{
        message = <Text style = {styles.Text}>
                Switch to square meter?
              </Text>
        message2= 'per square feet'
        input = <TextInput style = {styles.TextInput}
                      name = "size"
                      numeric value  
                      keyboardType ={'numeric'} value = {this.state.size}
                      placeholder='squre feet'
                      onChangeText={this.handleSize}
                    />
                    questionMsg =  <Text style = {styles.Text}>
                  Size of room in squrefeet : 
                </Text>
      }
      return (
        <View style={styles.container}>
          <View> 
          {message}<Switch  style = {styles.Switch}
                value={this.state.isEnabled}  
                onValueChange ={(isEnabled)=>this.setState({isEnabled})}/>  
            </View>
            {questionMsg}
              {input}
          <Text style = {styles.Text}>
            Please enter rate : 
          </Text>
          <TextInput style = {styles.TextInput}
            name = "flooring_price"
            keyboardType='numeric'
            value = {this.state.flooring_price}
            placeholder="Flooring rate"
            onChangeText={this.handleFlooring}
          />
          <Text style = {styles.Text}>
            Please enter installation cost : 
          </Text>
          <TextInput style = {styles.TextInput}
            name = "installation_cost"
            keyboardType='numeric'
            value = {this.state.installation_cost}
            placeholder="Installation cost"
            onChangeText={this.handleInsta}
          />
          {
            this.state.show &&
            <>
              <Text style = {styles.Text}>
                Rate : {this.calcFlooring()} $
              </Text>
              <Text style = {styles.Text}>
                Installation cost: {this.calcInstallation()} $
              </Text>
              <Text style = {styles.Text}>
                Total : {this.calcTotal()} $
              </Text>
              <Text style = {styles.Text}>
                Tax : {this.calcTax()} $
              </Text>
            </>
          }
        
          <Button onPress={this.onPress} title="Calculate" />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1 ,
      backgroundColor : '#caf9cc',
      justifyContent: 'flex-start',
      padding: 20,
  
    },
    Text:{
        fontSize  : 20 ,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        fontFamily: 'monospace'
    }, 
    TextInput:{
      borderWidth: 4,
      fontSize  : 17 ,
      padding: 5,
      margin:10,
      width:230,
      borderColor:'#5ca0eb',
      fontWeight: 'bold',
      fontFamily:'sans-serif',
      justifyContent: 'flex-start',
    },
  });




   
