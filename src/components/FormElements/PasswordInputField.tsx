import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputField, { InputFieldProps } from './InputField'
import { MaterialCommunityIcons } from '@expo/vector-icons';



const PasswordInputField = ({...otherProps}: InputFieldProps) => {
    const [passwordStatus, setPasswordStatus] = useState<boolean>(true);
  return (
    <InputField secureTextEntry={passwordStatus}  {...otherProps} icon={<MaterialCommunityIcons onPress={()=> setPasswordStatus(!passwordStatus)} name={`${passwordStatus ? 'eye-outline' : 'eye-off-outline'}`} size={20} style={{paddingHorizontal: 8}}/>} />
  )
}

export default PasswordInputField

const styles = StyleSheet.create({})