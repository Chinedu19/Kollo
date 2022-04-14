import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from './store';



const Demo = () => {
    
  return (
    <View style={styles.container}>
        <Image source={require("../assets/logo.png")}/>
      <Text style={styles.caption}>KOLLO</Text>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  caption:{
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    alignSelf: 'stretch'
  }
})