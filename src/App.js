import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootStackScreen from './navigations/RootStack';
import BottomTab from './navigations/BottomTab';
import AreaScreen from './screens/AreaScreen';
import {AuthContext} from './components/context';
import SplashScreen from './screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SchoolDetailsScreen from './screens/SchoolDetailsScreen';

// Global variable
const Stack = createNativeStackNavigator();

export default function App() {
  const initalLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initalLoginState);

  const authContext = useMemo(
    () => ({
      LogIn: async (username, password) => {
        let userToken = null;
        if (!username || !password) {
          alert('Thông tin đăng nhập không đúng');
          return;
        }
        if (username === 'danhnlc' && password === '123456789') {
          userToken = 'abcdefgh';
          try {
            await AsyncStorage.setItem('userToken', userToken);
          } catch (error) {
            console.log(error);
          }
        }
        dispatch({type: 'LOGIN', id: username, token: userToken});
      },
      LogOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGOUT'});
      },
      Register: () => {
        // setUserToken('danhnlc');
        // setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 6000);
  }, []);

  if (loginState.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Stack.Navigator initialRouteName="BottomTab">
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Area"
              component={AreaScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="School"
              component={SchoolDetailsScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
