import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View,Linking} from 'react-native'
import React, { useState } from 'react'
import { DelIcon } from '../../common/icons/del'
import { ContactBookIcon } from '../../common/icons/contactbook'
import { PhonekeyIcon } from '../../common/icons/Phonekey'
import { useNavigation } from '@react-navigation/native'
const dialpad=[1,2,3,4,5,6,7,8,9,"*",0,"#"]
const spacing=50

const Dialpad = ({navigation}) => {
    const [phoneNum,setPhoneNum]=useState([])
    let phoneNumber=phoneNum.join("")
    const makePhoneCall = () => {
      // Check if the device supports making phone calls
      if (Platform.OS === 'android') {
        Linking.openURL(`tel:${phoneNumber}`);
      } else {
        Linking.openURL(`telprompt:${phoneNumber}`);
      }
    }; 
  const handleDelete = () => {
    setPhoneNum((prevNum) => prevNum.slice(0, -1));
  };

  const handleAddDigit = (digit) => {
    setPhoneNum((prevNum) => [...prevNum, digit]);
  };
  return (
    <View style={{justifyContent:"flex-end",alignItems:"center",flex:1,marginBottom:16,backgroundColor:"white",padding:8}}>
      <View style={{flexDirection:"row",width:"100%",borderBottomWidth:1,borderBottomColor:"rgba(214, 214, 214, 1)",justifyContent:"center",alignItems:"center"}}>
    <View style={{width:"80%"}}><Text style={{textAlign:"center",fontSize:33,fontWeight:"400",padding:8}}>{phoneNumber}</Text></View>
   <TouchableOpacity onPress={handleDelete}><View style={{justifyContent:"center",alignItems:"center"}} ><DelIcon/></View></TouchableOpacity> 
    </View>
    <View style={{padding:16,justifyContent:"center",alignItems:"center"}}>
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
        onPress={()=>handleAddDigit(item)}
        >
            <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:37,fontWeight:"400"}}>{item}</Text>
            </View>
        </TouchableWithoutFeedback>
    }}
    />
    </View>
    <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",width:"100%",paddingHorizontal:48,marginTop:16}}>
      <TouchableOpacity><View style={{}} ><ContactBookIcon/></View></TouchableOpacity>
      <TouchableOpacity onPress={makePhoneCall}><View style={{marginLeft:64}} ><PhonekeyIcon/></View></TouchableOpacity>
      <View></View>
    </View>
    </View>
  )
}

export default Dialpad

const styles = StyleSheet.create({})