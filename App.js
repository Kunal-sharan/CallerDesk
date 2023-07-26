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


const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='skipscreen1' 
    >
      <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTPverify" component={OTPverify} />
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
            return <IconHome color={focused ? colors.primary : "rgba(144, 153, 174, 1)"} />;
          } else if (route.name === 'Chat') {
            return <IconChat  color={focused ? colors.primary : "rgba(144, 153, 174, 1)"} />;
          } else if (route.name === 'Calllogs') {
            return <IconCalllogs  color={focused ? colors.primary : "rgba(144, 153, 174, 1)"} />;
          } else if (route.name === 'Contacts') {
            return <IconContacts  color={focused ? colors.primary : "rgba(144, 153, 174, 1)"} />;
          }

          // You can return a default icon or null if needed
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Calllogs" component={Calllogs} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator()

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Dialpad/>
      {/* <NavigationContainer>
        <AppStack />  
      </NavigationContainer> */}
    </ApplicationProvider>
  );
}
