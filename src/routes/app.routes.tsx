import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { ChatRoom } from "../screens/ChatRoom";
import { Messages } from "../screens/Messages";
import { Search } from "../screens/Search";

const AppStack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="SignIn">
      <AppStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AppStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />

      <AppStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
      />

      <AppStack.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
        }}
      />

      <AppStack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}
