import { H1, H2, P } from "@/components/ui/typography";
import AnimationExample from "./animation-example";
import { DialogExample } from "./dialog-example";
import { Separator } from "@/components/ui/separator";
import { ControlledDialogExample } from "./dialog-example";
import { NavigationExample } from "./navigation-example";
import { TypoExample } from "./typo-example";
import { View } from "react-native";

export function Examples() {
    return (
        <>
            <H1 className="mb-4" >Examples</H1>
            <View className="flex flex-col gap-4">
                <View className="mb-4">
                    <H2 >Typography</H2>
                    <TypoExample />
                </View>
                <Separator />
                <View className="mb-4">
                    <H2>Navigation</H2>
                    <NavigationExample />
                </View>
                <Separator />
                <View className="mb-4">
                    <H2>Dialog</H2>
                    <DialogExample />
                    <ControlledDialogExample />
                </View>
                <Separator />
                <View className="mb-4">
                    <H2>Animation</H2>
                    <AnimationExample />
                </View>
            </View>
        </>
    )
}
