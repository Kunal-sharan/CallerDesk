import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { NoMissedCalls } from '../../common/icons/NoMissedCalls'
import { IconMissedCall } from '../../common/icons/missedIcon';
import MySearch from '../../common/components/inputs';

const MissedCalls = () => {
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
                <Text style={{color:"rgba(101, 101, 101, 1)",fontSize:10,fontWeight:"400"}}>12:09 AM | Jun 14</Text>
                </View>
                <View style={{position:"absolute",right:"2%",flexDirection:"row",justifyContent:"center"}}><Text  style={{color:"rgba(101, 101, 101, 1)",fontSize:10,fontWeight:"400",margin:8}}>5:30</Text><IconMissedCall/></View>
              </View>
        </View>
      </View>
    </ScrollView>
  );
}
     {/* <NoMissedCalls/> */}


export default MissedCalls

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
    backgroundColor: "white",
    color:"rgba(96, 82, 176, 1)",
    width: 40,
    height: 40,
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
})