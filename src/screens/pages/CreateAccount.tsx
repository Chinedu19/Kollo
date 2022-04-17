import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import StackPage from '../../components/Layout/StackPage'
import InputField from '../../components/FormElements/InputField'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PasswordInputField from '../../components/FormElements/PasswordInputField';
import Button from '../../components/Button';
import { colors } from '../../store';



const CreateAccount = () => {
    return (
        <StackPage title='Create Account'>
            <View style={{ display: 'flex', alignItems: 'center', marginVertical: 10, paddingHorizontal: 5 }}>
                <InputField placeholder="Full Name" />
                <InputField keyboardType={'email-address'} placeholder="Email Address" />
                <InputField keyboardType={'numeric'} placeholder="Phone Number" />
                <PasswordInputField placeholder='Password' />
                <PasswordInputField placeholder='Confirm Password' />
                <Button title='SIGNUP' width={'100%'} />
                <Text style={{ color: '#757575', marginVertical: 10 }}>Already have an account? <Text style={{ color: colors.primary }}>Login</Text></Text>

            </View>
        </StackPage>
    )
}

export default CreateAccount

const styles = StyleSheet.create({})