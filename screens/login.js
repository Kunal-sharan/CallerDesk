import { Text, View,Linking, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Layout,Input } from '@ui-kitten/components'
import {IconApp} from '../common/icons/callicon'
import { MickIcon } from '../common/icons/mickicon'
import { styles } from '../themes/styles'
import { TouchableWithoutFeedback } from 'react-native'
import { colors } from '../themes/vars'
import { ScrollView } from 'react-native'

export const Login = ({navigation}) => {
    const [phoneNumber,setphoneNumber]=useState("")
    const handleLinkPress = () => {
        const url = 'https://akveo.github.io/react-native-ui-kitten/'; // Replace this with the URL you want to link to
        Linking.openURL(url);
    }
  return (
    <Layout style={[styles.container,{padding:16}]}>
        <View style={{marginVertical:64}}>
            <IconApp/>
        </View>
        <View >
            <Text style={{fontWeight:"700",fontSize:24,color:colors.secondary}}>Welcome to CallerDesk</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center",marginBottom:64}}>
            <Text style={{color:colors.secondary,fontSize:16,fontWeight:"400"}}>One business number for you& Staff</Text>
            <Text style={{color:colors.secondary,fontSize:16,fontWeight:"400"}}>Members</Text>
        </View>
        <View style={{width:"100%"}}>
            <Input  accessoryRight={MickIcon} style={styles.inputshadow} size='large' placeholder='Enter your mobile no.' keyboardType='numeric' value={phoneNumber} onChangeText={(val)=>setphoneNumber(val)}/>
        </View>
        
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate("OTPverify",{phoneNumber})
    Keyboard.dismiss()}}>
            <View style={styles.cta} >
                <Text style={{color:"#fff",fontSize:15,fontWeight:"400"}} >REQUEST OTP</Text>
            </View>
        </TouchableWithoutFeedback>
        
        <View style={{alignItems:"center",justifyContent:"center",marginTop:128}}>
            <Text style={{textAlign:"center"}}>By Continuing, you agree
                to our <Text style={styles.linktext} onPress={handleLinkPress}>Terms of use</Text> and <Text style={styles.linktext} onPress={handleLinkPress}>Privacy policy</Text></Text> 
        </View>
        </Layout>
  )
}

