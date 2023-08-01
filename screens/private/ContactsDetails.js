import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {  useState} from 'react'
import { Phone } from '../../common/icons/Contactdetailsicons/phone';
import { CopyIcon } from '../../common/icons/copyicon';
import { ContactImgIcon } from '../../common/icons/contactimg';
import { EditIcon } from '../../common/icons/editicon';

const ContactProfile = () => {
    // const [imageSource, setImageSource] = useState(null);
    //  // Add an initial image source when the component mounts
    //  useEffect(() => {
    //   // Set your initial image source here (replace 'null' with your image source)
    //   setImageSource({ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.amphilsoc.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fblog%2Fpublic%2F2023-03%2FImage%25201%2520-%2520Albert%2520Einstein.jpg%3Fitok%3DO_KcZBvZ&tbnid=fxxSbh1-VXJkfM&vet=10CAIQxiAoAGoXChMImO7PnNu2gAMVAAAAAB0AAAAAEAY..i&imgrefurl=https%3A%2F%2Fwww.amphilsoc.org%2Fblog%2Fmusing-manuscripts-finding-einstein&docid=AqO_My3wV0DGIM&w=626&h=529&itg=1&q=professor&hl=en&authuser=0&ved=0CAIQxiAoAGoXChMImO7PnNu2gAMVAAAAAB0AAAAAEAY' });
    // }, []);
  
  
    // const selectImage = async () => {
    //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (status !== 'granted') {
    //     alert('Sorry, we need camera roll permissions to make this work!');
    //     return;
    //   }
  
    //   try {
    //     const result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //       allowsEditing: true,
    //       aspect: [1, 1],
    //       quality: 1,
    //     });
  
    //     if (!result.canceled) {
    //       setImageSource({ uri: result.uri });
    //     }
    //   } catch (error) {
    //     console.log('Error selecting image: ', error);
    //   }
    // };
  
    return (
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' ,paddingTop:4,marginVertical:8}}>

        {/* {imageSource ? (
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
        <View style={{padding:16}}><Text>Kunal Sharan</Text></View> */}
        <ContactImgIcon/>
      </View>
    );
  };
  
  
const ContactsDetails = ({navigation}) => {
  const [userEmail,setuserEmail]=useState("xyz123@gmail.com")
  const [userAddress,setuserAddress]=useState("4071 4th Floor,IP Ext 2")
  const [userComments,setuserComments]=useState("")
  const [phoneNum,setphoneNum]=useState("999 333 933 9009")

  return (
    <View style={{flex:1,width:"100%",backgroundColor:"white",padding:16,justifyContent:"flex-start",alignItems:"center"}}>
      <ContactProfile/>
      <View style={{width:"100%",marginVertical:8,flexDirection:"row",paddingLeft:12}}>
        <View style={{width:"95%"}}>
        <Text style={{fontSize:10,fontWeight:"600",color:"rgba(101, 101, 101, 1)"}}>CONTACT DETAILS</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("Edit Contact",{phoneNum,userEmail,userAddress})}}>
        <EditIcon/>
        </TouchableOpacity>
      </View>
      <View style={{borderColor:"rgba(218, 218, 218, 1)",borderWidth:1,borderRadius:10,width:"100%",padding:16}}>
        <View style={{flexDirection:"row",width:"100%",marginVertical:4}}>
            <View style={{width:"90%"}}>
            <Text style={cntactDetlstyle.caption}>Mobile</Text>
            <Text style={cntactDetlstyle.content}>{phoneNum}</Text>
            </View>
            <View style={{}}><Phone/></View>
        </View>
        <View style={{flexDirection:"row",width:"100%",marginVertical:4}}>
            <View style={{width:"90%"}}>
            <Text style={cntactDetlstyle.caption}>Email</Text>
            <Text style={cntactDetlstyle.content}>{userEmail}</Text>
            </View>
            <View style={{}}><CopyIcon/></View>
        </View>
        <View style={{flexDirection:"row",width:"100%",marginVertical:4}}>
            <View style={{width:"90%"}}>
            <Text style={cntactDetlstyle.caption}>Address</Text>
            <Text style={cntactDetlstyle.content}>{userAddress}</Text>
            </View>
            <View style={{}}></View>
        </View>
        <View style={{flexDirection:"row",width:"100%",marginVertical:4}}>
            <View style={{width:"90%"}}>
            <Text style={cntactDetlstyle.caption}>Status</Text>
            <Text style={cntactDetlstyle.content}>Cold</Text>
            </View>
            <View style={{}}></View>
        </View>
        <View style={{flexDirection:"row",width:"100%",marginVertical:4}}>
            <View style={{width:"90%"}}>
            <Text style={cntactDetlstyle.caption}>Date & Time</Text>
            <Text style={cntactDetlstyle.content}>06-28-2023 14:47:12</Text>
            </View>
            <View style={{}}></View>
        </View>
        <View style={{flexDirection:"row",width:"100%",marginVertical:4}}>
            <View style={{width:"90%"}}>
            <Text style={cntactDetlstyle.caption}>Assigned Member</Text>
            <Text style={cntactDetlstyle.content}>N/A</Text>
            </View>
            <View style={{}}></View>
        </View>
      </View>
    </View>
  )
}

export default ContactsDetails

const cntactDetlstyle = StyleSheet.create({
  caption:{
    fontSize:10,
    fontWeight:"400",
    color:"rgba(101, 101, 101, 1)"
  },
  content:{
    fontSize:14,
    fontWeight:"400",
    color:"rgba(51, 51, 51, 1)"
  }
})