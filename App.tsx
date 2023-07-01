import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

import { AuthContextProvider } from "./src/hooks/authContext";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
