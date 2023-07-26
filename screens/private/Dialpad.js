import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@ui-kitten/components'
import { DelIcon } from '../../common/icons/del'
const dialpad=[1,2,3,4,5,6,7,8,9,"*",0,"#"]
const spacing=20
const Dialpad = () => {
    const [phoneNum,setPhoneNum]=useState([])
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Input accessoryRight={DelIcon}
    value={phoneNum.toString()}
    size='large'
    />
    <View>
    <FlatList
    numColumns={3}
    data={dialpad}
    style={{flexGrow:0,width:"100%"}}
    scrollEnabled={false}
    columnWrapperStyle={{gap:spacing}}
    contentContainerStyle={{gap:spacing}}
    keyExtractor={(_,index)=>index.toString()}
    renderItem={({item})=>{
        return <TouchableWithoutFeedback
        onPress={()=>{
            setPhoneNum(prevNum=>[...prevNum,item])
        }}
        >
            <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:37,fontWeight:"400"}}>{item}</Text>
            </View>
        </TouchableWithoutFeedback>
    }}
    />
    </View>
    </View>
  )
}

export default Dialpad

const styles = StyleSheet.create({})