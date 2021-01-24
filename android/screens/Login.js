import React from 'react';
import {View , StyleSheet ,Text,Image, ScrollView} from 'react-native'
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';
import { color } from 'react-native-reanimated';

const Login = props => {
    return (

        <ScrollView style>
        <View style={style.container}> 
        <Image 
        source={require('../assets/login.png')} 
        resizeMode="center" 
        style={style.image} />
        <Text style={style.textTitle}> Customer Login </Text>
        <Text style={style.textbody}> Log into existing accounts</Text>
        <Inputs name="Email" icon="user"></Inputs>
        <Input name="Password" icon="lock" pass={true} />
        <View style={{width:'80%'}}> 
        <Text style={[styles.textbody] ,{alignSelf:'flex-end'}}> Forgot Password? </Text>
        </View>
        <Submit title='Log In' color='#0148a4'/>
        <Text style={styles.textBody}> Or connect using </Text>
        <View style={{flexDirection:'row'}}>
        <Account color="#ec482f" icon="google" title="GMail"/>
        <Account color="#3b5c8f" icon="facebook" title="Facebook"/>
        </View>
        <View style={{flexDirection:'row', marginVertical:5}}>
            <Text style={style.textbody}> Don't Have An Account? </Text> </View>
            <Text style={[style.textbody,{color:'blue'}]} onPress={()=> 
            props.navigation.navigate('SignUp')}> SignUp</Text> 
            </View>
        </ScrollView>);

    }


const style = StyleSheet.create ({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height:250,
        marginVertical:10
    },
    textTitle:{
       fontFamily:'Foundation',
       fontSize:40,
       marginVertical:10,
    },
    textbody:{
        fontFamily:'Foundation',
        fontSize:15,
    }

});


export default Login;