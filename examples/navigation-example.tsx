import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ROUTES } from "@/lib/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const navigation = useNavigation<NativeStackNavigationProp<any>>();

export function NavigationExample() {
    return (
        <Button onPress={() => { navigation.navigate(ROUTES.OTHER) }}><Text>Go to Other</Text></Button>
    )
}
