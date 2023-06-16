import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Routes /> */}
      <SignIn />
    </NavigationContainer>
  );
}
