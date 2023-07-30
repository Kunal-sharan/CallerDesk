import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomIcon from './CustomIcon'; // Import the CustomIcon component
import {Card} from "@ui-kitten/components"
import { useNavigation } from '@react-navigation/native';

const MyCard = ({ title, icon,screen}) => {
  const navigation=useNavigation()
  return (
    <Card style={styles.card} onPress={()=>{navigation.navigate(screen)}}>
      <View style={{ flexDirection: "row", alignItems: "center",width:"100%" }}>
        <CustomIcon svgData={icon} />
        <Text style={{padding:8,fontSize:11,fontWeight:"400",textAlign:"center"}}>{title}</Text>
      </View>
      </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 147,
    height: 113,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(226, 226, 226, 1)",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin:4,
    elevation: 5,
    // Drop shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
});

export default MyCard;
