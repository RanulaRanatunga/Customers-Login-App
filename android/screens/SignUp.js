import React from 'react'
import {View,StyleSheet,Text, ScrollView ,Image} from 'react-native'
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Input from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <View  style={styles.container}>
        <Image source={require('../assets/signup.png')}
        resizeMode='center' style={style.image}/>
         <Text style={style.textTitle}> Sign Up </Text>
        <Text style={style.textBody}> Create an account to get login  </Text>
        </View>
        <Input name="Enter Full Name" icon="user"/>
        <Input name="Enter Email" icon="envelope"/>
        <Input name="Phone" icon="phone"/>
        <Input name="Password" icon="lock" pass={true}/>
        <Input name="Confirm Password" icon="lock" pass={true}/>
        <Submit color='#0251ce' title="Create an Account"/>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.textBody}> Already Have an Account </Text>
            <Text style={[styles.textBody,{color:'blue'}]} onPress={() =>
            props.navigation.navigate('MainMenu')}> Login Here</Text> 
             </View>
        </ScrollView>
      
    )
};

const styles = StyleSheet.create ({
    container:{
        flex:1,
        alignItems:'center',  
    },
    image:{
        width:500,
        height:300,
        marginVertical:20,
    },
    textTitle:{
        fontSize:40,
        fontFamily:'Foundation',
        marginVertical:5,
    },
    textBody:{
        fontSize:18,
        fontFamily:'Foundation',
    }

});

export default SignUp;