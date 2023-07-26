import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const MySearch = () => {
  return (
    <View style={Searchstyles.inputstyle}>
    <TextInput placeholder="Search Calls,Calls Logs" />
    </View>
  )
}

export default MySearch

const Searchstyles = StyleSheet.create({
    inputstyle:{
        width:"100%",
        borderRadius:10,
        borderWidth:1,
        backgroundColor:"rgba(251, 251, 251, 1)",
        borderColor:"rgba(217, 217, 217, 1)",
        padding:8
    },
    inputText:{
        fontSize:12,
        fontWeight:"400",
        color:"rgba(173, 173, 173, 1)",
        textAlign:"left"
    }
        
})