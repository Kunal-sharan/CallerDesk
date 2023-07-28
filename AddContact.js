import React from 'react';
import { IconAddContact } from './common/icons/addcontacticon';
import { TouchableOpacity } from 'react-native';

export const AddContact=({ navigation })=> {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate("Add Contacts")}}>
      <IconAddContact />
    </TouchableOpacity>
  );
}
