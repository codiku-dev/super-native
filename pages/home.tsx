
import { SafeAreaView } from 'react-native-safe-area-context';
import { Examples } from '@/examples/examples';


export function Home() {
    return (
        <SafeAreaView className='page'>
            <Examples />
        </SafeAreaView>
    )
}
