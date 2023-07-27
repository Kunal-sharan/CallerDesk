import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NoAnswerCalls } from '../../common/icons/NoAnsweredCalls'

const AnsweredCalls = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
      <NoAnswerCalls/>
    </View>
  )
}

export default AnsweredCalls

const styles = StyleSheet.create({})