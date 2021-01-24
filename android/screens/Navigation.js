import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigation} from '@react-navigation/stack';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import { View } from 'react-native';

const Stack = createStackNavigation();

const navigation = props => {

    return (
        <NavigationContainer > 
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Login} options={{headerShown:false}}> </Stack.Screen>
              <Stack.Screen name="Home" component={SignUp} options={{headerShown:false}}> </Stack.Screen>
          
          </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
