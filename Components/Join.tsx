import React from "react";
import {Image,Text, SafeAreaView,StyleSheet,View,TouchableOpacity, ScrollView} from "react-native"

function Join()
{
    return(
            <SafeAreaView style={styles.mainscreen}>
            <View style={styles.banner}>
                    <Text style={styles.bannertext}>Select device you want to sync Movie</Text>
            </View>
            <ScrollView style={styles.scrollview}>
                <TouchableOpacity>
                    <View style={styles.list}>
                    <Image source={require('./../assets/apple.png')} style={styles.images}/>
                    
                    
                    <View style={styles.list2}>
                        <Text style={styles.devicename}>Samsung - A22</Text>
                        <Text style={styles.devicemodel}>Amandeep Singh</Text>
                    </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list}>
                    <Image source={require('./../assets/apple.png')} style={styles.images}/>
                    
                    
                    <View style={styles.list2}>
                        <Text style={styles.devicename}>IPhone 11</Text>
                        <Text style={styles.devicemodel}>Kirandeep</Text>
                    </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list}>
                    <Image source={require('./../assets/apple.png')} style={styles.images}/>
                    
                    
                    <View style={styles.list2}>
                        <Text style={styles.devicename}>IPhone 13</Text>
                        <Text style={styles.devicemodel}>Prabhjit Singh</Text>
                    </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list}>
                    <Image source={require('./../assets/apple.png')} style={styles.images}/>
                    
                    
                    <View style={styles.list2}>
                        <Text style={styles.devicename}>Iphone 8</Text>
                        <Text style={styles.devicemodel}>Amandeep Singh</Text>
                    </View>
                    </View>
                </TouchableOpacity>

                
            </ScrollView>
            </SafeAreaView>

    )

}

const styles =StyleSheet.create({
    mainscreen:{
        flex:1,
        backgroundColor: "black",
        height:"100%",
        
        
    },
    banner:{
        // height:30,
        width:'100%',
        textAlign:'center',
        borderWidth:.5,
        marginBottom:10
    },
    bannertext:{
        textAlign:'center',
        fontSize:17,
        color:'white',
        margin:10
    },
    scrollview:{

    },
    list:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:5,
        paddingTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        maxHeight:100,
        flexDirection:"row",
        backgroundColor:"#1f0e0e",
        
    },
    images:{
        // borderWidth:1,
        width:50,
        height:50
        
    },
    list2:{
        flex:1,
        flexDirection:'column',
        // borderWidth:1,
    },
    devicename:{
        color:'white',
        fontSize:18,
        marginLeft:8,
        marginBottom:8
    },
    devicemodel:{
        color:'white',
        fontSize:14,
        marginLeft:8
    }

    
    
})

export default Join;
