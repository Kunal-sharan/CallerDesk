import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NoCallLogs } from '../../common/icons/NocallLogs'

const Logs = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
      <NoCallLogs/>
    </View>
  )
}

export default Logs

const styles = StyleSheet.create({})