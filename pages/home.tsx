
import { SafeAreaView } from 'react-native-safe-area-context';
import { H1, H2 } from "@/components/ui/typography";
import AnimationExample from '@/examples/animation-example';
import { ControlledDialogExample } from '@/examples/dialog-example';
import { DialogExample } from '@/examples/dialog-example';
import { TypoExample } from '@/examples/typo-example';
import { Separator } from '@/components/ui/separator';
import { NavigationExample } from '@/examples/navigation-example';

const options = [
    { label: 'Option 1', value: '1', id: '1' },
    { label: 'Option 2', value: '2', id: '2' },
    { label: 'Option 3', value: '3', id: '3' },
];

export function Home() {
    return (
        <SafeAreaView>
            <H1>Examples</H1>
            <H2>Typography</H2>
            <TypoExample />
            <Separator />
            <H2>Navigation</H2>
            <NavigationExample />
            <Separator />
            <H2>Dialog</H2>
            <DialogExample />
            <ControlledDialogExample />
            <Separator />
            <H2>Animation</H2>
            <AnimationExample />
        </SafeAreaView>
    )
}
