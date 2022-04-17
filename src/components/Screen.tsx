import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';

type Props = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
const Screen = ({children,style}: Props) => {
  return (
    <View style={[{paddingTop: Constants.statusBarHeight,}, style]}>
      {children}
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({})