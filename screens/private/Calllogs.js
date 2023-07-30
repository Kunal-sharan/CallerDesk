import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MySearch from '../../common/components/inputs'
import { BlueContactIcon } from '../../common/icons/contactsBlue'
import { useNavigation } from '@react-navigation/native'
const Contacts = () => {
  const navigation=useNavigation()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const url = "";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={{ width: "100%" ,padding:16,backgroundColor:"white"}}>
        <MySearch />
        <TouchableOpacity onPress={()=>{navigation.navigate("Contact Details")}}>
        <View>
          {/* {loading ? ( // Use the loading state here to conditionally render the ActivityIndicator
            <ActivityIndicator />
          ) : (
            data.map((post) => ( */}
              <View
                style={styles.ContactCard}
                // key={post.id} // Assuming there's an "id" property in your contact data
              >
                <View
                  style={styles.contactsImg}
                >
                  <Text>K</Text>
                </View>
                <View style={{paddingHorizontal:16}}>
                <Text >Kunal Sharan</Text>
                <Text style={{color:"rgba(101, 101, 101, 1)",fontSize:10,fontWeight:"400"}}>Wednesday | 28/06/2023</Text>
                </View>
                <View style={{position:"absolute",right:"2%"}}><BlueContactIcon/></View>
              </View>
        </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Contacts;

const styles = StyleSheet.create({
  ContactCard:{
    width:"100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(237, 221, 221, 0.7)",
    padding: 16,
    alignItems: "center"
  },
  contactsImg:{
    backgroundColor: "rgba(86, 242, 124, 1)",
    color:"white",
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    // Drop shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
});
