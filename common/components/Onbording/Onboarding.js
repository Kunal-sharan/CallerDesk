import { Text, View,FlatList,Animated } from 'react-native'
import React,{useRef,useState,useEffect} from 'react'
import Slides from '../../../screens/slides/Slides'
import OnboardingItem from './OnboardingItems'
import Paginator from './Paginators'
import Nextbutton from './Nextbutton'

const Onboarding = ({navigation}) => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const scrollX =useRef(new Animated.Value(0)).current;
    useEffect(() => {
      // Automatically scroll to the next slide every 3 seconds
      const scrollInterval = setInterval(() => {
        if (currentIndex < Slides.length - 1) {
          slideRef.current.scrollToIndex({ index: currentIndex + 1 });
        } 
      },2000); // Change 3000 to the desired interval time in milliseconds (e.g., 3000ms = 3 seconds)
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(scrollInterval);
    }, [currentIndex]);
    // useEffect(()=>{
    //   const skipInterval= setTimeout(()=>{navigation.navigate("Login")},6000);
    //   return ()=>clearInterval(skipInterval)
    // })
    const ViewableItemsChanged=useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index);
    }).current;
    
    const slideRef=useRef(null);
    const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current
    const isFirstSlide=currentIndex===0;
  return (
    <View style={{flex:3,backgroundColor:"rgba(248, 247, 255, 1)"}}>
      <FlatList data={Slides} renderItem={({item})=><OnboardingItem item={item}/>}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item)=>item.id}
      onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
      useNativeDriver:false})}
      onViewableItemsChanged={ViewableItemsChanged}
      viewabilityConfig={viewConfig}
      scrollEventThrottle={32}
      ref={slideRef}/>
      <View style={{flexDirection:"row",alignItems:"flex-end",backgroundColor:"white"}}>
      <View style={{flexDirection:"column"}}>
    <Paginator data={Slides} scrollX={scrollX}/>
    <View style={{paddingLeft:32}} ><Text onPress={()=>{navigation.navigate("Login")}}>Skip</Text></View>
    </View>
    <View style={{width:"65%",alignItems:"flex-end"}}>
    <Nextbutton  isFirstSlide={isFirstSlide}  percentage={(currentIndex+1)*(100/Slides.length)}/>
    </View>
    </View>
    
    </View>

  )
}

export default Onboarding

