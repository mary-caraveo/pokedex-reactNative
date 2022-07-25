import React from 'react';
import { View } from 'react-native';
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';
import useAuth from '../hooks/useAuth';

const AccountScreen = () => {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default AccountScreen;
