import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../store'
import Button from '../../components/Button'
const onboard1 = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../assets/woman.png')} style={{ flex: 0.7 }}>
                <View style={{flex: 1, backgroundColor: '#000', opacity: 0.1}}/>
            </ImageBackground>
            <View style={{ backgroundColor: '#fff', flex: 0.3, display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
                <Button  title="Get Started"  onPress={() => console.log('Get Started...')} />
                <Text style={{color: '#757575', marginVertical: 10}}>Already have an account? <Text style={{color: colors.primary}}>Login</Text></Text>
            </View>
        </View>
    )
}

export default onboard1

const styles = StyleSheet.create({})