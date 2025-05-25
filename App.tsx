import "./global.css"
import "./lib/icon";

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "@/pages/home";
import { ROUTES } from "@/lib/routes";
import { Other } from "./pages/other";
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DevToolsBubble } from "react-native-react-query-devtools";
import Clipboard, { } from "@react-native-clipboard/clipboard";
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

if (__DEV__) {
  require("./configs/reactotron-config");
}

export default function App(): React.JSX.Element {
  const onCopy = async (text: string) => {
    try {
      Clipboard.setString(text);
      return true;
    } catch {
      return false;
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ROUTES.HOME} component={Home} />
          <Stack.Screen name={ROUTES.OTHER} component={Other} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* broken for now https://github.com/LovesWorking/react-native-react-query-devtools/issues/27 */}
      {/* <DevToolsBubble onCopy={onCopy} /> */}
      <Toast />
    </QueryClientProvider>
  );
}
