import { View, Text,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { styles } from '../../themes/styles'
import { DialIcon } from '../icons/dialicon'
const Skipscrnbtn= () => {
  return (
      <View style={{marginTop:28}}>
                    <View style={[styles.ctaskip,{flexDirection:"row"}]}>
                    <View >
                        <Text style={{color:"white",}}>GET BUSINESS NUMBER</Text>
                    </View>
                    <View style={{marginLeft:16}}><DialIcon/></View>
                    </View>
    </View>
  )
}

export default Skipscrnbtn