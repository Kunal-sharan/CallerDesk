import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WhatsappTemplate } from '../../common/icons/whatsapptemp'
import { Myredcta, Mywhitecta } from '../../common/components/cta'
import { QRIcon } from '../../common/icons/qr'
import { Directn } from '../../common/icons/directn'

const Whatsapptemplate = () => {
  return (
    <View style={{width:"100%",padding:16,justifyContent:"center",alignItems:"center"}}>
        <View style={{marginVertical:4}}><WhatsappTemplate/></View>
        <Myredcta head="Add Payments Message" desc="Add your UPI ID or bank account" icon={QRIcon} />
        <Mywhitecta title="Add Business Address" desc="Add your address with direction" icon={Directn} />
    </View>
  )
}

export default Whatsapptemplate

const styles = StyleSheet.create({})