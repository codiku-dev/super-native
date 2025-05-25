import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function AnimationExample() {
    const width = useSharedValue(100);

    const handlePress = () => {
        width.value = withSpring(width.value + 50);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Animated.View
                style={{
                    width,
                    height: 100,
                    backgroundColor: 'violet',
                }}
            />
            <Button onPress={handlePress}>
                <Text>Animation</Text>
            </Button>
        </View>
    );
}