
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "@/components/ui/button";
import { Text } from '@/components/ui/text';
import { H1, H2, H3, H4, P, BlockQuote, Code, Lead, Large, Small, Muted } from "@/components/ui/typography";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@/lib/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const options = [
    { label: 'Option 1', value: '1', id: '1' },
    { label: 'Option 2', value: '2', id: '2' },
    { label: 'Option 3', value: '3', id: '3' },
];

export function Home() {
    const [selectedOption, setSelectedOption] = useState<string>();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <SafeAreaView>

            <H1>Home</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <P>Paragraph</P>
            <BlockQuote>Block Quote</BlockQuote>
            <Code>console.log("Hello, world!");</Code>
            <Lead>Lead</Lead>
            <Large>Large</Large>
            <Small>Small</Small>
            <Muted>Muted</Muted>
            <Button onPress={() => { navigation.navigate(ROUTES.OTHER) }}><Text>Go to Other</Text></Button>
            <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                {options.map((option) => (
                    <RadioGroupItem key={option.id} option={option} />
                ))}
            </RadioGroup>
        </SafeAreaView>
    )
}
