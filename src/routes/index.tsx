import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useMMKVBoolean } from 'react-native-mmkv';

import {
  Home,
  CreatePassword,
  Welcome,
  Password,
  RestoreWallet,
} from '@screens/index';
import { TRoutes } from '@routes/types/routes';
import { HAS_WALLET } from '@constants/wallet';

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

export function Routes() {
  const [hasWallet] = useMMKVBoolean(HAS_WALLET);
  const initialRouteName = TRoutes[hasWallet ? 'PASSWORD' : 'WELCOME'];

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={initialRouteName}>
        <Stack.Screen name={TRoutes.WELCOME} component={Welcome} />
        <Stack.Screen name={TRoutes.HOME} component={Home} />
        <Stack.Screen name={TRoutes.RESTORE_WALLET} component={RestoreWallet} />
        <Stack.Screen
          name={TRoutes.CREATE_PASSWORD}
          component={CreatePassword}
        />
        <Stack.Screen name={TRoutes.PASSWORD} component={Password} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
