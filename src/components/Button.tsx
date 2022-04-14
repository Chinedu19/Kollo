import { StyleSheet, Text, View, TouchableOpacity, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native'
import React from 'react'
import { colors } from '../store';

type ButtonProps = {
    title?: string;
    style?: StyleProp<ViewStyle>;
    color?: string;
    backgroundColor?: string;
    width?: string | number;
    onPress?: ((event: GestureResponderEvent) => void)
}
const Button = ({ title,color="#fff", backgroundColor=colors.primary, width='80%', style, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={{width, backgroundColor, paddingVertical: 10, borderRadius: 15}}> 
                <Text style={{color, textAlign: 'center', fontSize: 20}}>{title}</Text>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({})