import { StatusBar } from 'expo-status-bar';
import React from 'react'; // Don't forget to import React
import { StyleSheet, Text, View } from 'react-native';
import { Login } from "./screens/login"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"
import { OTPverify } from './screens/OTPverify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Easing } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/private/HomeTab';
import { IconChat } from './common/icons/messageicon';
import { IconCalllogs } from './common/icons/calllogsicon';
import { IconContacts } from './common/icons/contactsicon';
import Chat from './screens/private/Chat';
import Calllogs from './screens/private/Calllogs';
import Contacts from './screens/private/Contacts';
import { colors } from './themes/vars';
import { IconHome } from './common/icons/homeicon';
import Onboarding from './common/components/Onbording/Onboarding';
import Dialpad from './screens/private/Dialpad';
import MissedCalls from './screens/private/MissedCalls';
import Logs from './screens/private/Logs';
import AnsweredCalls from './screens/private/AnsweredCalls';
import AddContactDetails from './screens/private/AddContactDetails';
import { AddContact } from './AddContact';
import { IconAddContact } from './common/icons/addcontacticon';
import { NotificationIcon } from './common/icons/notification';
import ContactsDetails from './screens/private/ContactsDetails';
import EditContact from './screens/private/EditContact';
import ContactsTab from './screens/private/ContactsTab';
const headerRight=()=>{
  return(
    <View style={{flexDirection:"row",padding:4}}>
      <View></View>
      <View><NotificationIcon/></View>
      <View style={{marginHorizontal:8}}><IconAddContact/></View>
    </View>
  )
}
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='skipscreen1' 
    >
      <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTPverify" component={OTPverify} />
      <Stack.Screen name="Missed Calls" component={MissedCalls}/>
      <Stack.Screen name='Call Logs' component={Logs}/>
      <Stack.Screen name="Answered Calls" component={AnsweredCalls}/>
      <Stack.Screen name='Add Contacts' component={AddContactDetails}/>
      <Stack.Screen name='Edit Contact' component={EditContact}/>
      <Stack.Screen name='Contact Details' component={ContactsDetails}/>
      <Stack.Screen name='Contacts' component={Contacts}/>
      <Stack.Screen name="Tabs" options={{headerShown:false}} component={HomeTabs}/>
    </Stack.Navigator>
  )
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => {

          if (route.name === 'Home') {
            return <IconHome color={focused ? colors.primary : "red"} />;
          } else if (route.name === 'Chat') {
            return <IconChat  color={focused ? colors.primary : "red"} />;
          } else if (route.name === 'Calllogs') {
            return <IconCalllogs  color={focused ? colors.primary : "red"} />;
          } else if (route.name === 'Contact') {
            return <IconContacts  color={focused ? colors.primary : "red"} />;
          }

          // You can return a default icon or null if needed
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Calllogs" options={{headerRight:headerRight}} component={Calllogs} />
      <Tab.Screen name="Contact" component={Dialpad} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator()

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <Dialpad/> */}
      <NavigationContainer>
        <AppStack />  
      </NavigationContainer>
    </ApplicationProvider>
  );
}
