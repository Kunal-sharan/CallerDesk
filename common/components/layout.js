import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomIcon from './CustomIcon'; // Import the CustomIcon component

const MyCard = ({ title, icon }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CustomIcon svgData={icon} />
        <Text style={{padding:8,fontSize:11.5,fontWeight:"400"}}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 143.68,
    height: 123.88,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(226, 226, 226, 1)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    margin:8,
    elevation: 5,
    // Drop shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
});

export default MyCard;
