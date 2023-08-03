import { Text, View,TouchableWithoutFeedback} from 'react-native'
import React,{useState} from 'react'
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
const handleUpdateContact = async () => {
    try {
      // Simulate an API request with a delay (replace this with your real API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // The API request is successful, and the contact details are updated
      // Now you can navigate back to the ContactDetails screen
      navigation.navigate("Contact Details", {
        phoneNum: newphoneNum,
        userEmail: newEmail,
        userAddress: newAddress,
      });
    } catch (error) {
      // Handle any errors that may occur during the update process
      console.log('Error updating contact:', error.message);
      // Optionally, you can display an error message to the user
    }
  };

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
    <TouchableWithoutFeedback onPress={handleUpdateContact}>
                <View style={styles.cta}>
                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "400" }}>UPDATE</Text>
                </View>
    </TouchableWithoutFeedback>
      
    </View>
    </View>
  )
}

export default EditContact
