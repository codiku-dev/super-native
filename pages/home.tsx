
import { SafeAreaView } from 'react-native-safe-area-context';
import { H1, H2 } from "@/components/ui/typography";
import AnimationExample from '@/examples/animation-example';
import { ControlledDialogExample } from '@/examples/dialog-example';
import { DialogExample } from '@/examples/dialog-example';
import { TypoExample } from '@/examples/typo-example';
import { Separator } from '@/components/ui/separator';
import { NavigationExample } from '@/examples/navigation-example';


export function Home() {
    return (
        <SafeAreaView>
            <H1 className='mb-8' >Examples</H1>
            <H2 >Typography</H2>
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
