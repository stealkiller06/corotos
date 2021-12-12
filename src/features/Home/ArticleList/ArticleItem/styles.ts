import {StyleSheet} from 'react-native'
import { CorotosGrey, CorotosWhite } from '../../../../_core/colors'

export default StyleSheet.create({
    articleContainer:{
        flex:1,
        margin:5,
        borderBottomWidth:1,
        borderColor:CorotosGrey,
        paddingBottom:10
    },
    articleImage:{
        width:'100%',
        height:180,
        resizeMode:'cover',
        borderRadius:15,
        borderWidth:1,
        borderColor:CorotosWhite
    },
    articlePriceContainer:{
        flexDirection:'row',
        marginTop:5
    },
    articlePriceCurrency:{
        color:CorotosWhite,
        fontSize:14
    },
    articlePriceValue:{
        color:CorotosWhite,
        fontSize:22,
        fontWeight:'bold'
    },
    articleDescription:{
        color:CorotosWhite,
        marginTop:5,
        fontSize:18
    },
    articleUserContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    articleUserImage:{
        width:55,
        height:55,
        borderRadius:100,
        borderColor:CorotosWhite,
        borderWidth:1,
    },
    articleUserName:{
        color:CorotosWhite,
        marginLeft:10,
    }
    
})