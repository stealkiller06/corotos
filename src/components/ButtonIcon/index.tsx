import React from 'react'
import {View,Text, TouchableOpacity,ViewStyle} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { CorotosWhite } from '../../_core/colors';


interface ButtonIconProps{
    icon:string, 
    onPress:()=>void,
    style?:ViewStyle
}

export default function ButtonIcon(props:ButtonIconProps){
const {icon,onPress,style}  = props;

return(
<TouchableOpacity onPress={onPress} style={style}>
    <FontAwesome name={icon} size={24} color={CorotosWhite} />
</TouchableOpacity>
)
}