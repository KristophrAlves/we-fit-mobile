import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/router/app.tab.routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
