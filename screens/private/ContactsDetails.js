import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Phone } from '../../common/icons/Contactdetailsicons/phone';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from '../../common/icons/Contactdetailsicons/camera'
import { ImageArea } from '../../common/icons/Contactdetailsicons/imageArea';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ContactProfile = () => {
    const [imageSource, setImageSource] = useState(null);
     // Add an initial image source when the component mounts
     useEffect(() => {
      // Set your initial image source here (replace 'null' with your image source)
      setImageSource({ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.amphilsoc.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fblog%2Fpublic%2F2023-03%2FImage%25201%2520-%2520Albert%2520Einstein.jpg%3Fitok%3DO_KcZBvZ&tbnid=fxxSbh1-VXJkfM&vet=10CAIQxiAoAGoXChMImO7PnNu2gAMVAAAAAB0AAAAAEAY..i&imgrefurl=https%3A%2F%2Fwww.amphilsoc.org%2Fblog%2Fmusing-manuscripts-finding-einstein&docid=AqO_My3wV0DGIM&w=626&h=529&itg=1&q=professor&hl=en&authuser=0&ved=0CAIQxiAoAGoXChMImO7PnNu2gAMVAAAAAB0AAAAAEAY' });
    }, []);
  
  
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
      <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' ,paddingTop:4,marginVertical:8}}>
        {imageSource ? (
          <Image
            source={imageSource}
            style={{ width:110, height:110, borderRadius:110 }}
          />
        ) : (
            <ImageArea/>
        )}
        <TouchableOpacity style={{marginTop:-16}} onPress={selectImage}>
          <Camera/>
        </TouchableOpacity>
        <View style={{padding:16}}><Text>Kunal Sharan</Text></View>
      </View>
    );
  };
  
  
const ContactsDetails = () => {
  return (
    <View style={{flex:1,width:"100%",backgroundColor:"white",padding:16,justifyContent:"flex-start",alignItems:"center"}}>
      <ContactProfile/>
      <View style={{width:"100%",marginVertical:8}}>
        <Text>CONTACT DETAILS</Text>
      </View>
      <View style={{borderColor:"rgba(218, 218, 218, 1)",borderWidth:1,borderRadius:10,width:"100%",padding:16}}>
        <View style={{flexDirection:"row",width:"100%",marginVertical:4}}>
            <View style={{width:"90%"}}>
            <Text>Mobile</Text>
            <Text>+91 98964368986</Text>
            </View>
            <View style={{}}><Phone/></View>
        </View>
        <View style={{flexDirection:"row",width:"100%"}}>
            <View style={{width:"90%"}}>
            <Text>Email</Text>
            <Text>xyz123@gmail.com</Text>
            </View>
            <View style={{}}></View>
        </View>
      </View>
    </View>
  )
}

export default ContactsDetails

const styles = StyleSheet.create({})