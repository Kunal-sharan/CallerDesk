import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Input, Layout} from "@ui-kitten/components"
import { TouchableWithoutFeedback } from 'react-native'
import { styles } from '../../themes/styles'
import { Phone } from '../../common/icons/Contactdetailsicons/phone'
import { Name } from '../../common/icons/Contactdetailsicons/name'
import { Mail } from '../../common/icons/Contactdetailsicons/mail'
import { Address } from '../../common/icons/Contactdetailsicons/address'
import { ScrollView } from 'react-native-gesture-handler'

import {  TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from '../../common/icons/Contactdetailsicons/camera'
import { ImageArea } from '../../common/icons/Contactdetailsicons/imageArea'

const ContactProfile = () => {
  const [imageSource, setImageSource] = useState(null);

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImageSource({ uri: result.uri });
      }
    } catch (error) {
      console.log('Error selecting image: ', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,paddingTop:4}}>
      {imageSource ? (
        <Image
          source={imageSource}
          style={{ width:84, height: 84, borderRadius: 84 }}
        />
      ) : (
          <ImageArea/>
      )}
      <TouchableOpacity style={{marginTop:-16}} onPress={selectImage}>
        <Camera/>
      </TouchableOpacity>
    </View>
  );
};



const ContactDetails = () => {
const [userName,setuserName]=useState("Xyz name")
const [userEmail,setuserEmail]=useState("xyz123@gmail.com")
const [userAddress,setuserAddress]=useState("4071 4th Floor,IP Ext 2")
const [userComments,setuserComments]=useState("")
const [phoneNum,setphoneNum]=useState("999 333 933 9009")
  return (
    <ScrollView style={{width:"100%",flex:1,backgroundColor:"white"}} >
        <View style={{width:"100%"}}>
            <ContactProfile/>
        </View>    
    <View style={{width:"100%",justifyContent:"center",alignItems:"center",flex:1,marginBottom:4,paddingHorizontal:8}}>
        <Text style={{textAlign:"left",width:"100%",fontSize:10,fontWeight:"600",color:"rgba(101, 101, 101, 1)",paddingLeft:8}}>CONTACT DETAIL</Text>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        accessoryRight={Phone}
        value={phoneNum}
        onChangeText={(val)=>setphoneNum(val)}
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
        value={userEmail}
        onChangeText={(val)=>setuserEmail(val)}
        editable
        /> 
    </View>
    <View> 
        <Input
        style={{width:"100%",backgroundColor:"white",padding:4,borderColor:"rgba(186, 181, 181, 1)",borderWidth:1,borderRadius:5}}
        textStyle={{fontSize:12,fontWeight:"400",color:"rgba(29, 25, 25, 1)"}}
        accessoryRight={Address}
        value={userAddress}
        onChangeText={(val)=>setuserAddress(val)}
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
    <TouchableWithoutFeedback >
                <View style={styles.cta}>
                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "400" }}>UPDATE</Text>
                </View>
    </TouchableWithoutFeedback>
      
    </View>
    </ScrollView>
  )
}

export default ContactDetails
