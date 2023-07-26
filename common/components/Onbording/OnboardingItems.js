import { StyleSheet, Text, View,Image,useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from '../../../themes/styles';
import { Layout } from '@ui-kitten/components';
import Skipscrnbtn from '../buttons';

const OnboardingItem = ({item}) => {
    const {width}=useWindowDimensions();
    
  return (
    <Layout style={[styles.container,{backgroundColor:"rgba(248, 247, 255, 1)"}]}>
    <View style={[{width,flex:0.7,justifyContent:"center",alignItems:"center"}]}>
     <Image source={item.image} style={[styles.skipimgbg,{width,resizeMode:"contain"}]}/>
    </View>
    <View style={[{width},styles.skipscrnlrprt]}>
    <Text style={{textAlign:"center",fontSize:23,fontWeight:"700"}}>{item.title}</Text>
    <View><Skipscrnbtn/></View>
    <View><Text style={{fontSize:14,fontWeight:"400",marginVertical:4}}>Already have an account? Login</Text></View>
    </View>
    </Layout>
  )
}

export default OnboardingItem
