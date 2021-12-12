import React from 'react'
import {TextInput,View, ViewStyle} from 'react-native'
import { CorotosLightGrey, CorotosWhite } from '../../_core/colors'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'; 


interface TextFieldProps{
    placeholder:string,
    style?:ViewStyle
}
export default function TextField(props:TextFieldProps){

    const {placeholder,style} = props
    return(
        <View style={style}>
        <TextInput style={styles.input} placeholderTextColor={CorotosLightGrey} placeholder={placeholder} />
        <FontAwesome name="search" size={20} color={CorotosWhite} style={styles.icon} />
        </View>
    )
}