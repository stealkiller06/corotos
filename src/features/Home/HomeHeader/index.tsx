import React from 'react'
import {View,Text, SafeAreaView} from 'react-native'
import ButtonIcon from '../../../components/ButtonIcon'
import TextField from '../../../components/TextField'
import styles from './styles'

interface HomeHeaderProps{}

export default function HomeHeader(props:HomeHeaderProps){
    

return(
<View style={styles.homeHeaderContainer}>
    <TextField placeholder="¿Qué estás buscando?" style={{flex:1}}/>
    <View style={styles.homeHeaderButtonContainer}>
    <ButtonIcon icon="bars" onPress={()=>console.log("press")} />

    </View>
</View>
)
}