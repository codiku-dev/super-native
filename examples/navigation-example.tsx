import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H2 } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const navigation = useNavigation<NativeStackNavigationProp<any>>();

export function NavigationExample() {
    return (
        <>
            <H2>Navigation</H2>
            <Button onPress={() => { navigation.navigate(ROUTES.OTHER) }}><Text>Go to Other</Text></Button>
        </>
    )
}
