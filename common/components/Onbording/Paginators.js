import { View, Text, StyleSheet,Animated,useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from '../../../themes/styles'

const Paginator = ({data,scrollX}) => {
  const {width}=useWindowDimensions()
  const bgcolor=""
  return (
    <View style={{flexDirection:"row",height:32,paddingLeft:16}}>
      {data.map((_,i)=>{
        const inputRange=[(i-1)*width,i*width,(i+1)*width];
        const dotWidth=scrollX.interpolate({
          inputRange,
          outputRange:[8,24,8],
          extrapolate:"clamp"
        });
        const dotbg=scrollX.interpolate({
          inputRange,
          outputRange:["rgba(51, 51, 51, 0.4)","rgba(241, 50, 96, 1)","rgba(51, 51, 51, 0.4)"],
          extrapolate:"clamp"
        });
        return <Animated.View style={[paginatorstyles.dot,{width:dotWidth,backgroundColor:dotbg}]} key={i.toString()}/>
       
      })}
    </View>
  )
}
const paginatorstyles=StyleSheet.create({
   dot:{
    height:8,
    borderRadius:20,
    marginVertical:8,
    marginHorizontal:4
   } 
})
export default Paginator