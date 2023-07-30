import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Input } from '@ui-kitten/components'
import { SearchIcon } from '../icons/search'


const MySearch = () => {
  return (
    <View>
    <Input style={Searchstyles.inputstyle} placeholder="Search Calls,Calls Logs" textStyle={Searchstyles.inputText} accessoryLeft={SearchIcon} />
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
        borderColor:"rgba(217, 217, 217, 1)"
    },
    inputText:{
        fontSize:12,
        fontWeight:"400",
        color:"rgba(173, 173, 173, 1)",
        textAlign:"left"
    }
        
})