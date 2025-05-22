import "./global.css"
import React from 'react';
import {
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text as TextNW } from '@/ui/text';
export default function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text className="text-4xl text-red-500">React native</Text>
      <TextNW className="text-4xl text-blue-500">Native wind</TextNW>
    </SafeAreaView>
  );
}
