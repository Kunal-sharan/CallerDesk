import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback,Modal,View,Linking} from 'react-native'
import React, { useState } from 'react'
import { DelIcon } from '../../common/icons/del'
import { ContactBookIcon } from '../../common/icons/contactbook'
import { PhonekeyIcon } from '../../common/icons/Phonekey'
import { DownArrow } from '../../common/icons/downarrow'
import { Dialbutton } from '../../common/icons/dial'


const Dialpad = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [phoneNum, setPhoneNum] = useState([]);

  const openpad = () => {
    setModalVisible(true);
  };
  const closepad = () => {
    setModalVisible(false);
  };

  const phoneNumber = phoneNum.join('');

  const makePhoneCall = () => {
    // Check if the device supports making phone calls
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      Linking.openURL(`telprompt:${phoneNumber}`);
    }
  };

  const handleDelete = () => {
    setPhoneNum((prevNum) => prevNum.slice(0, -1));
  };

  const handleAddDigit = (digit) => {
    setPhoneNum((prevNum) => [...prevNum, digit]);
  };

  const dialpad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  const spacing = 30;
  const hSpacing = 55;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openpad}>
        <Dialbutton/>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1, backgroundColor: 'white' }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  borderBottomWidth: 1,
                  borderBottomColor: 'rgba(214, 214, 214, 1)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View style={{ width: '90%' }}>
                  <Text style={{ textAlign: 'center', fontSize: 33, fontWeight: '400', padding: 8 }}>
                    {phoneNumber}
                  </Text>
                </View>
                <TouchableOpacity onPress={handleDelete}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <DelIcon />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 16, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                  numColumns={3}
                  data={dialpad}
                  style={{ flexGrow: 0, width: '100%' }}
                  scrollEnabled={false}
                  columnWrapperStyle={{ gap: hSpacing }}
                  contentContainerStyle={{ gap: spacing }}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => {
                    return (
                      <TouchableWithoutFeedback onPress={() => handleAddDigit(item)}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 37, fontWeight: '400' }}>{item}</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: '100%',
                  paddingHorizontal: 28,
                  marginTop: 16,
                }}
              >
                <TouchableOpacity>
                  <View style={{}}>
                    <ContactBookIcon />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={makePhoneCall}>
                  <View style={{ marginLeft: 64 }}>
                    <PhonekeyIcon />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={closepad}>
                <View style={{ marginLeft: 74 }}>
                  <DownArrow />
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  modalContent: {
    height: '70%',
    backgroundColor: 'white',
    padding: 20,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Dialpad;
