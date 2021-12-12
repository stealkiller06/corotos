import {StyleSheet} from 'react-native'
import { CorotosGrey, CorotosWhite } from '../../_core/colors';

export default StyleSheet.create({
    input: {
      height: 55,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      backgroundColor:CorotosGrey,
      paddingLeft:40,
      color:CorotosWhite,
      marginRight:10
    },
    icon:{
        position:'absolute',
        left:15,
        top:18,
    }
  });