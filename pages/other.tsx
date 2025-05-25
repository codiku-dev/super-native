import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, H2 } from "@/components/ui/typography";
import AnimationExample from "@/examples/animation-example";
import { ControlledDialogExample, DialogExample } from "@/examples/dialog-example";
import { TypoExample } from "@/examples/typo-example";
import { ROUTES } from "@/lib/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";

export function Other() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <SafeAreaView>
            <H1>Other page</H1>
            <Button onPress={() => { navigation.navigate(ROUTES.HOME) }}><Text>Go to Home</Text></Button>
        </SafeAreaView>
    )
}

