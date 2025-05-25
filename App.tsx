import "./global.css"
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "@/pages/home";
import { ROUTES } from "@/lib/routes";
import { Other } from "./pages/other";
import { PortalHost } from "@rn-primitives/portal";

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ROUTES.HOME} component={Home} />
          <Stack.Screen name={ROUTES.OTHER} component={Other} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
