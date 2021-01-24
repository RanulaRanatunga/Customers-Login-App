import React , {Component}from 'react'
import {View , StyleSheet ,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Inpur } from 'react-native-elements'

class Input extends Component {

    state = {isFocused:false};

    onFocusChange = () => {
        this.setState({isFocused:true})
    }

    render() {
        return(
         <View style={[styles.inputContainer, {borderColor:this.state.isFocused ? '#0779ef':'#eee' }]}> 
         <Input  placeholder={this.props.name} 
         onFocus= {this.onFocusChange}
         inputContainerStyle= {styles.inputText}
         secureTextEntry={this.props.pass}
         inputStyle={styles.inputText}
         secureTextEntry={this.props.pass}/>
         leftIcon= {
            <Icon name={this.props.icon}
            size={22}
            color={this.state.isFocused ? '#0779ef': 'grey'}/> }
         </View>
        );
    };
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        height: 50,
        borderRadius:100,
        marginVertical:10,
        borderWidth:3.5
    },

    inputContainer: {
        borderBottomWidth:0
    },

    InputText: {
        color: '#0779ef',
        fontWeight: 'bold',
        marginLeft:5
    }


});

export default Input;
