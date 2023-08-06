import { View} from 'react-native'
import React from 'react'
import MyCard from '../../common/components/layout'
import { HomeM1 } from '../../common/icons/HomeM1'
import { HomeM2 } from '../../common/icons/HomeM2'
import { HomeM3 } from '../../common/icons/HomeM3'
import { HomeM4 } from '../../common/icons/HomeM4'
import { HomeM5 } from '../../common/icons/HomeM5'
import { HomeM6 } from '../../common/icons/HomeM6'

export const Home = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",padding:16,width:"100%",backgroundColor:"white",flex:1}}>
      <View style={{flexDirection:"row"}}>
      <MyCard
        title="Total Call"
        icon={HomeM1}
        screen="Call Logs"
      />
      <MyCard title="Staff Calls" icon={HomeM2}/>
      </View>
      <View style={{flexDirection:"row"}} >
        <MyCard title="Answered Calls" icon={HomeM3} screen="Answered Calls"/>
        <MyCard title="Missed Calls" icon={HomeM4} screen="Missed Calls"/>
      </View>
      <View style={{flexDirection:"row"}} >
        <MyCard title="Add Teams" icon={HomeM5}/>
        <MyCard title="Add Group" icon={HomeM6}/>
      </View>
      <View style={{flexDirection:"row"}} >
        <MyCard title="Voice Answered" icon={HomeM5}/>
        <MyCard title="Block User" icon={HomeM6}/>
      </View>
    </View>
  )
}



