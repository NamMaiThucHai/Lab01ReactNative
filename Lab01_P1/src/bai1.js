import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const bai1= () =>{
    return(
      <View style={myStyle.container}>
        <Text style={{color:'white'}}>Hello World</Text>
      </View>
    )
  }
  
  export default bai1; 
  var myStyle = StyleSheet.create({
    container: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent:'center'
    },
  }
  )