import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignUp from '../pages/SignUp'
const Auth=createStackNavigator()
const AuthRoutes:React.FC=()=>(
    <Auth.Navigator>
        <Auth.Screen name="SignUp" component={SignUp}/>
    </Auth.Navigator>
);
export default AuthRoutes