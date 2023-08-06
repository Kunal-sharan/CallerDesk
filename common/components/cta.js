import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomIcon from './CustomIcon'; // Import the CustomIcon component
import {Card} from "@ui-kitten/components"


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
export const Myredcta=({head,desc,icon})=>{
  return (
    <Card>
      <View style={styles.ctared}>
        <View>
        <Text style={styles.captionred}>{head}</Text>
        <Text style={styles.descred}>{desc}</Text>
        </View>
        <CustomIcon svgData={icon}/>
      </View>
    </Card>
  );

}
export const Mycta=({icon,title,txtcolor,mr})=>{
  return(
    <Card style={styles.mycta}>
      <View style={{flexDirection:"row"}}>
      <View style={{marginRight:mr}}>
        <CustomIcon svgData={icon}/>
        </View>
      <View>
        <Text style={[styles.myctatitle,{color:txtcolor}]} >{title}</Text>
      </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
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
  },
  mycta:{
    margin:4,
    width:"50%",
    backgroundColor:"#FFFFFF",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    elevation: 5,
    // Drop shadow for iOS
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5
  },
  myctatitle:{
    fontSize:14,
    fontWeight:"400",
  }

});

