import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../Screen';
import { StatusBar } from 'expo-status-bar';

const StackPage = ({ children, title, onBackPress }: { children?: React.ReactNode; title: string; onBackPress?: () => void; }) => {
    return (
        <Screen style={{ paddingHorizontal: 10 }}>
            <View style={styles.header}>
                <TouchableHighlight onPress={onBackPress}>
                <View style={{ backgroundColor: '#EFEFEF', borderRadius: 5, paddingHorizontal: 3 }}>
                    <MaterialCommunityIcons name='chevron-left' size={35} color="#000" />
                </View>
                </TouchableHighlight>
                <Text style={{ fontWeight: '700', fontSize: 28, marginLeft: 10 }}>{title}</Text>
            </View>
            {children}
            <StatusBar style="dark" />
        </Screen>
    )
}

export default StackPage

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10
    }
})