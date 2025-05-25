import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1 } from "@/components/ui/typography";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";


export function Other() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <SafeAreaView>
            <H1>Other</H1>

            <Button onPress={() => { navigation.goBack() }}><Text>Go back</Text></Button>

        </SafeAreaView>
    )
}


