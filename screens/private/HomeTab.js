import { StyleSheet, Text, View ,SvgXml, TouchableOpacity} from 'react-native'
import React from 'react'
import MySearch from '../../common/components/inputs'
import MyCard from '../../common/components/layout'
import { HomeM1 } from '../../common/icons/HomeM1'
import { HomeM2 } from '../../common/icons/HomeM2'
import { HomeM3 } from '../../common/icons/HomeM3'
import { HomeM4 } from '../../common/icons/HomeM4'
import { HomeM5 } from '../../common/icons/HomeM5'
import { HomeM6 } from '../../common/icons/HomeM6'

export const Home = ({navigation}) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",padding:16,width:"100%",backgroundColor:"rgba(255, 255, 255, 1)",flex:1}}>
      <MySearch/>
      <View>
      <View style={{marginVertical:8,flexDirection:"row",justifyContent:"flex-start",alignContent:"flex-start",width:"100%"}}>
        <Text style={{fontSize:28,fontWeight:"400",marginRight:8,textAlign:"left"}}>Hello</Text>
        <Text style={{fontSize:27,fontWeight:"700",textAlign:"left"}}>Julia</Text>
      </View>
      <View>
        <Text style={{color:"rgba(153, 150, 150, 1)",fontSize:13,fontWeight:"400",paddingBottom:16}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
       <TouchableOpacity onPress={()=>{navigation.navigate("Call Logs")}}>
      <MyCard
        title="Total Call"
        icon={HomeM1} 
      />
      </TouchableOpacity> 
      <MyCard title="Staff Calls" icon={HomeM2}/>
      </View>
      <View style={{flexDirection:"row"}} >
        <TouchableOpacity onPress={()=>{navigation.navigate("Answered Calls")}}>
        <MyCard title="Answered Calls" icon={HomeM3}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("Missed Calls")}}>
        <MyCard title="Missed Calls" icon={HomeM4}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row"}} >
        <MyCard title="Add Teams" icon={HomeM5}/>
        <MyCard title="Add Group" icon={HomeM6}/>
      </View>
    </View>
  )
}



