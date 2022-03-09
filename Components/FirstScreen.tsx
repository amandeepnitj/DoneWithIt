import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {Text, SafeAreaView,StyleSheet,View,TouchableOpacity} from "react-native"

function FirstScreen({navigation})
{
    return(
            <SafeAreaView style={styles.mainscreen}>
            <View style = {styles.upperportion}>
                <Text style={styles.logo}>Movies Share</Text>
                <Text style={styles.batch}>Li'l Home Theatre</Text>

            </View>
            <View style = {styles.lowerportion}>
            <TouchableOpacity style={styles.buttons} onPress={()=>{navigation.push('host')}}> 
              <Text style={styles.Host}>Host</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={()=>{navigation.push('join')}}>
              <Text style={styles.Join}>Join</Text>
          </TouchableOpacity>

            </View>
            </SafeAreaView>

    )

}

const styles =StyleSheet.create({
    mainscreen:{
        flex:1,
        // backgroundColor: "orange",
        height:"100%",
        backgroundColor:'black',
        // color:"white"
    },
    upperportion:{
        flex:1,
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center"

    },
    logo:{
        fontSize:40,
        borderRadius:6,
        borderWidth:1,
        borderColor:"white",
        padding:10,
        margin:4,
        color:"white",
        backgroundColor:'#3d1b1b'

    },
    batch:{
        position:"relative",
        left:70,
        color:"white"



    },
    lowerportion:{
        flex:1,
        //backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center"


    },
    buttons:{
        width:"80%"
        

    },
    Host:{
        fontSize:20,
        borderRadius:6,
        borderWidth:1,
        padding:10,
        margin:4,
        backgroundColor:"#3d1b1b",
        textAlign:"center",
        color:"white"
    },
    Join:{
        fontSize:20,
        borderRadius:6,
        borderWidth:1,
        padding:10,
        margin:4,
        backgroundColor:"#3d1b1b",
        textAlign:"center",
        color:"white"

    }
    
})

export default FirstScreen;
