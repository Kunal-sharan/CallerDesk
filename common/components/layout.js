import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomIcon from './CustomIcon'; // Import the CustomIcon component
import {Card} from "@ui-kitten/components"
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

export const MyCard = ({ title, icon,screen}) => {
  const navigation=useNavigation()
  return (
    <Card style={styles.card} onPress={()=>{navigation.navigate(screen)}}>
      <View style={{ justifyContent:"center",alignItems: "center",width:"100%" }}>
        <CustomIcon svgData={icon} />
        <Text style={{padding:8,fontSize:11,fontWeight:"400",textAlign:"center"}}>{title}</Text>
      </View>
      </Card>
  );
};
export const Mywhitecta=({title,desc,icon})=>{
  return (
    <Card>
      <View style={styles.ctawhite}>
        <View>
        <Text style={styles.captionwhite}>{title}</Text>
        <Text style={styles.descwhite}>{desc}</Text>
        </View>
        <CustomIcon svgData={icon}/>
      </View>
    </Card>
  );

};
export const Myredcta=({title,desc,icon})=>{
  return (
    <Card>
      <View style={styles.ctared}>
        <View>
        <Text style={styles.captionred}>{title}</Text>
        <Text style={styles.descred}>{desc}</Text>
        </View>
        <CustomIcon svgData={icon}/>
      </View>
    </Card>
  );

}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 147,
    height: 125,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(241, 50, 96, 0.16)",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin:8,
    elevation: 8,
    // Drop shadow for iOS
    shadowColor: 'rgba(241, 50, 96, 0.16)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  captionwhite:{
    fontSize:17,
    fontWeight:"400",
    color:"rgba(51, 51, 51, 1)"
  },
  captionred:{
    fontSize:17,
    fontWeight:"400",
    color:"rgba(255, 255, 255, 1)"
  },
  ctawhite:{
    backgroundColor: "rgba(255, 255, 255, 1)",
    width:"100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(237, 221, 221, 1)",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin:8,
    elevation: 5,
    // Drop shadow for iOS
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  ctared:{
    backgroundColor: "rgba(241, 50, 96, 1)",
    width:"100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(237, 221, 221, 1)",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin:8,
    elevation: 5,
    // Drop shadow for iOS
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  descwhite:{
    fontSize:12,
    fontWeight:"400",
    color:"rgba(101, 101, 101, 1)"
  },
  descred:{
    fontSize:12,
    fontWeight:"400",
    color:"rgba(250, 246, 246, 1)"
  }

});

