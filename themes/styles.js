import { StyleSheet } from "react-native";
import { colors } from "./vars";

export const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        padding:0,
        width:"100%"
    },
    cta:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:colors.primary,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        padding: 16,
        marginVertical:8
    },
    inputshadow:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    // This is important for Android, as shadow won't show without elevation
    elevation: 8,
    },
    verifybefore:{
        borderBottomColor:colors.secondary,
        borderBottomWidth:2,
        marginHorizontal:16,
        width:"20%",
        fontSize:39,
        fontWeight:"400",
        textAlign:"center",
        padding:8
    },
    verifyafter:{
        borderBottomColor:colors.primary,
        borderBottomWidth:2,
        marginHorizontal:16,
        width:"20%",
        fontSize:39,
        fontWeight:"400",
        textAlign:"center",
        padding:8
    },
    linktext:{
        color:"blue"
    },
    skipimgbg:{
        margin:0,
        padding:0
    },
    ctaskip:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"#393939",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        padding: 16,
        marginVertical:16
    },
    skipscrnlrprt:{
        flex:0.3,
        backgroundColor:"white",
       shadowOpacity: 0.8,
       shadowRadius: 3.84,
       elevation: 4,
       borderTopLeftRadius:20,
       borderTopRightRadius:20,
       shadowColor:"rgba(64, 123, 255, 0.8)",
       justifyContent:"center",
       alignItems:"center",
       marginHorizontal:0,
       paddingVertical:64,
       paddingHorizontal:16
    }
})