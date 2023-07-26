import { Text, View } from 'react-native'
import React,{useRef,useState} from 'react'
import { Layout,Input } from '@ui-kitten/components'
import {IconApp} from '../common/icons/callicon'
import { styles } from '../themes/styles'
import { TouchableWithoutFeedback } from 'react-native'
import { colors } from '../themes/vars'
import { TextInput } from 'react-native'

export const OTPverify=({ route,navigation })=>{ 
    const {phoneNumber}=route.params;
    const [inputValues, setInputValues] = useState(['','','','']);
  const inputRefs = useRef([]);
  const checkInput=['1','2','3','4']
  const handleChange = (value, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
      setIsFocused(true);
    }
    else{
        setIsFocused(false)
    }
  };
  
  const checkOTP=()=>{
    if(JSON.stringify(inputValues)===JSON.stringify(checkInput)){
        navigation.navigate("Tabs")
    }
    else{
        alert("WRONG OTP ENTERED")
    }
  }
 const[isFocused,setIsFocused]=useState(false);
 

    return (
        <Layout style={[styles.container,{padding:16}]}>
            <View style={{ marginVertical: 64 }}>
                <IconApp />
            </View>
            <View>
                <Text style={{ fontWeight: "700", fontSize: 24, color: colors.secondary }}>  Verfication Code</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginBottom:16 }}>
                <Text style={{ color: colors.secondary, fontSize: 16, fontWeight: "400" }}>We have sent verfication code to</Text>
                <Text style={{ color: colors.primary, fontSize: 16, fontWeight: "400"  }}>+91-{phoneNumber}</Text>
            </View>
            <View style={{ width: "100%" ,flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",paddingHorizontal:16,paddingBottom:8}}>
                <TextInput ref={(ref) => (inputRefs.current[0] = ref)}
        value={inputValues[0]}
        onChangeText={(value) => handleChange(value, 0)} keyboardType='numeric'style={[styles.verifybefore,isFocused && styles.verifyafter]} maxLength={1}/>
                <TextInput ref={(ref) => (inputRefs.current[1] = ref)}
        value={inputValues[1]}
        onChangeText={(value) => handleChange(value, 1)} keyboardType='numeric' style={[styles.verifybefore,isFocused && styles.verifyafter]} maxLength={1}/>
                <TextInput ref={(ref) => (inputRefs.current[2] = ref)}
        value={inputValues[2]}
        onChangeText={(value) => handleChange(value, 2)} keyboardType='numeric' style={[styles.verifybefore,isFocused && styles.verifyafter]} maxLength={1}/>
                <TextInput ref={(ref) => (inputRefs.current[3] = ref)}
        value={inputValues[3]}
        onChangeText={(value) => handleChange(value, 3)} keyboardType='numeric' style={[styles.verifybefore,isFocused && styles.verifyafter]} maxLength={1} onEndEditing={checkOTP}/>
            </View>
            <TouchableWithoutFeedback >
                <View style={styles.cta}>
                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "400" }}>REQUEST OTP</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{width:"100%",justifyContent:"center",alignItems:"center",marginTop:8}}>
                <Text style={{fontSize:13,fontWeight:"500"}}>Didn't get OTP? Receive OTP via Call</Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 128 }}>
                <Text style={{ textAlign: "center" }}>By Continuing, you agree
                    to our Terms of use and Privacy policy</Text>
            </View>
        </Layout>
    )
}

