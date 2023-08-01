import { StyleSheet, Text, TouchableOpacity, View,TouchableWithoutFeedback} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {Input} from "@ui-kitten/components"
import { Phone } from '../../common/icons/Contactdetailsicons/phone'
import { Name } from '../../common/icons/Contactdetailsicons/name'
import { Mail } from '../../common/icons/Contactdetailsicons/mail'
import { Address } from '../../common/icons/Contactdetailsicons/address'
import { styles } from '../../themes/styles'

const EditContact = ({navigation,route}) => {
const [userName,setuserName]=useState("Xyz name")
const [userComments,setuserComments]=useState("")
const {phoneNum,userAddress,userEmail}=route.params
const [newphoneNum,setNewPhoneNum]=useState(phoneNum)
const [newEmail,setNewEmail]=useState(userEmail)
const [newAddress,setNewAddress]=useState(userAddress)

  return (
    <View style={{width:"100%",flex:1,justifyContent:"flex-end",alignItems:"center",padding:16}}>
    <View style={{width:"100%",justifyContent:"center",alignItems:"center",flex:0.8,marginBottom:1,paddingHorizontal:8,backgroundColor:"white"}}>
      <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        accessoryRight={Phone}
        value={newphoneNum}
        onChangeText={(val)=>setNewPhoneNum(val)}
        keyboardType='numeric'
        editable
        /> 
    </View>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        accessoryRight={Name}
        value={userName}
        onChangeText={(val)=>setuserName(val)}
        editable
        /> 
    </View>             
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        accessoryRight={Mail}
        value={newEmail}
        onChangeText={(val)=>setNewEmail(val)}
        editable
        /> 
    </View>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        accessoryRight={Address}
        value={newAddress}
        onChangeText={(val)=>setNewAddress(val)}
        editable
        /> 
    </View>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        /> 
    </View>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        /> 
    </View>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        /> 
    </View>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)",minHeight:48}}
        multiline={true}
        size='large'
        value={userComments}
        onChangeText={(val)=>setuserComments(val)}
        placeholder='Comments'
        editable
        /> 
    </View>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate("Contact Details",{phoneNum:newphoneNum,userEmail:newEmail,userAddress:newAddress})}>
                <View style={styles.cta}>
                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "400" }}>UPDATE</Text>
                </View>
    </TouchableWithoutFeedback>
      
    </View>
    </View>
  )
}

export default EditContact
