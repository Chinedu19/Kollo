import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import StackPage from '../../components/Layout/StackPage'
import InputField from '../../components/FormElements/InputField'
import PasswordInputField from '../../components/FormElements/PasswordInputField'
import { colors } from '../../store'
import Button from '../../components/Button'
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {}

const WelcomeScreen = (props: Props) => {
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    return (
        <StackPage title='Welcome'>
            <View style={{ display: 'flex', alignItems: 'center', marginVertical: 10, paddingHorizontal: 5 }}>
                <InputField keyboardType={'numeric'} placeholder="Phone Number" />
                <PasswordInputField placeholder='Password' />
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', marginVertical: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={()=> setRememberMe(!rememberMe)} style={{paddingHorizontal: 7, paddingVertical: 5, display: 'flex',flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={`${rememberMe ? "checkbox-marked" : "checkbox-blank"}`} style={{color: rememberMe ? colors.primary : colors.lightGray, marginEnd: 5}} size={18} />
                        <Text>Remember Me</Text>
                    </TouchableOpacity>
                    <Text style={{color: 'grey'}}>Forgot Password</Text>
                </View>
                <Button title='LOGIN' width={'100%'} />
                <Text style={{ color: '#757575', marginVertical: 10 }}>Don't have an account? <Text style={{ color: colors.primary }}>SignUp</Text></Text>
            </View>
        </StackPage>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})