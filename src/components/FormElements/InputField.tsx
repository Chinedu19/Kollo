import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { colors } from '../../store';

export interface InputFieldProps extends TextInputProps{
    name?: string;
    icon?: React.ReactNode;
    placeholder?: string;
    width?: number | string;
    backgroundColor?: string;
}
const InputField = ({icon, width="100%", backgroundColor=colors.lightGray, placeholder, ...otherProps}: InputFieldProps) => {
  return (
    <View style={{width: width, paddingHorizontal: 8, alignItems: 'center', display: 'flex', flexDirection: 'row', backgroundColor: backgroundColor, borderRadius: 10, overflow: 'hidden', marginVertical: 10}}>
      <TextInput style={{ flex: 1, fontSize: 18, backgroundColor: backgroundColor, paddingHorizontal: 3, paddingVertical: 8}} placeholder={placeholder} {...otherProps}/>
      {icon}
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({})