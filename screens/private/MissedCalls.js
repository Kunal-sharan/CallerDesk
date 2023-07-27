import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NoMissedCalls } from '../../common/icons/NoMissedCalls'

const MissedCalls = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
     <NoMissedCalls/>
    </View>
  )
}

export default MissedCalls

const styles = StyleSheet.create({})