import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import  { SvgXml } from 'react-native-svg';


export const ContactBookIcon=()=>{
    const navigation=useNavigation();
    const handleNavigation = () => {
      // Navigate to the desired screen (e.g., "Add Contacts")
      navigation.navigate('Contacts');
    };
    return (
        <TouchableOpacity onPress={handleNavigation}><SvgXml xml={`<?xml version="1.0" ?><svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.9231 13.9237C15.9623 13.9237 17.6155 12.2706 17.6155 10.2314C17.6155 8.19217 15.9623 6.53906 13.9231 6.53906C11.8839 6.53906 10.2308 8.19217 10.2308 10.2314C10.2308 12.2706 11.8839 13.9237 13.9231 13.9237Z" stroke="#EE0940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 6.53846H2.84615V4.69231C2.84615 3.71305 3.23516 2.77389 3.92761 2.08145C4.62005 1.38901 5.5592 1 6.53846 1H21.3077C22.287 1 23.2261 1.38901 23.9185 2.08145C24.611 2.77389 25 3.71305 25 4.69231V23.1538C25 24.1331 24.611 25.0723 23.9185 25.7647C23.2261 26.4571 22.287 26.8462 21.3077 26.8462H6.53846C5.5592 26.8462 4.62005 26.4571 3.92761 25.7647C3.23516 25.0723 2.84615 24.1331 2.84615 23.1538V21.3077H1M1 13.9231H2.84615M1 10.2308H2.84615M1 17.6154H2.84615" stroke="#EE0940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4617 19.4618V17.6156C19.4617 16.6364 19.0727 15.6972 18.3802 15.0048C17.6878 14.3124 16.7486 13.9233 15.7694 13.9233H12.0771C11.0978 13.9233 10.1587 14.3124 9.46622 15.0048C8.77378 15.6972 8.38477 16.6364 8.38477 17.6156V19.4618C8.38477 19.9514 8.57927 20.421 8.92549 20.7672C9.27171 21.1135 9.74129 21.308 10.2309 21.308H17.6155C18.1052 21.308 18.5747 21.1135 18.921 20.7672C19.2672 20.421 19.4617 19.9514 19.4617 19.4618Z" stroke="#EE0940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>           
    `}
     />
     </TouchableOpacity>
     )
}