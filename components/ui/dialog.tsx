import * as React from 'react';
import { Platform, StyleSheet, View, type ViewProps, Modal, Pressable } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import { cn } from '@/lib/utils';

type DialogContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const DialogContext = React.createContext<DialogContextType | undefined>(undefined);

function useDialog() {
    const context = React.useContext(DialogContext);
    if (!context) {
        throw new Error('Dialog components must be used within a Dialog');
    }
    return context;
}

type DialogProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
};

function Dialog({ open: controlledOpen, onOpenChange, children }: DialogProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = React.useCallback(
        (value: boolean) => {
            if (controlledOpen === undefined) {
                setUncontrolledOpen(value);
            }
            onOpenChange?.(value);
        },
        [controlledOpen, onOpenChange]
    );

    const childrenArray = React.Children.toArray(children);
    const trigger = childrenArray.find(
        (child) => React.isValidElement(child) && child.type === DialogTrigger
    );
    const content = childrenArray.filter(
        (child) => React.isValidElement(child) && child.type !== DialogTrigger
    );

    return (
        <DialogContext.Provider value={{ open, setOpen }}>
            {trigger}
            {open && (
                <Modal
                    visible={open}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setOpen(false)}
                    statusBarTranslucent
                    hardwareAccelerated
                >
                    {content}
                </Modal>
            )}
        </DialogContext.Provider>
    );
}

type DialogTriggerProps = ViewProps & {
    children: React.ReactNode;
};

function DialogTrigger({ children, ...props }: DialogTriggerProps) {
    const { setOpen } = useDialog();
    return (
        <Pressable onPress={() => { console.log('open'); setOpen(true) }} {...props}>
            {children}
        </Pressable>
    );
}

function DialogOverlay({
    className,
    children,
    onPress,
    ...props
}: ViewProps & {
    onPress?: () => void;
}) {
    return (
        <Pressable
            style={[StyleSheet.absoluteFill, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }]}
            className={cn('flex bg-black/80 justify-center items-center p-2', className)}
            onPress={onPress}
            {...props}
        >
            <Animated.View
                entering={FadeIn.duration(150)}
                exiting={FadeOut.duration(150)}
                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
            >
                {children}
            </Animated.View>
        </Pressable>
    );
}

function DialogContent({
    className,
    children,
    ...props
}: ViewProps) {
    const { setOpen } = useDialog();
    return (
        <DialogOverlay onPress={() => setOpen(false)}>
            <Pressable
                onPress={(e) => {
                    e.stopPropagation();
                }}
            >
                <View
                    className={cn(
                        'w-[90%] max-w-lg gap-4 border border-border bg-background p-6 shadow-lg rounded-lg',
                        className
                    )}
                    {...props}
                >
                    {children}
                    <Pressable
                        className="absolute right-4 top-4 p-0.5 rounded-sm opacity-70"
                        onPress={() => setOpen(false)}
                    >
                        <X
                            size={Platform.OS === 'web' ? 16 : 18}
                            className="text-muted-foreground"
                        />
                    </Pressable>
                </View>
            </Pressable>
        </DialogOverlay>
    );
}

function DialogHeader({ className, ...props }: ViewProps) {
    return (
        <View className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)} {...props} />
    );
}

function DialogFooter({ className, ...props }: ViewProps) {
    return (
        <View
            className={cn('flex flex-col-reverse sm:flex-row sm:justify-end gap-2', className)}
            {...props}
        />
    );
}

function DialogTitle({ className, ...props }: ViewProps) {
    return (
        <View
            className={cn(
                'text-lg native:text-xl text-foreground font-semibold leading-none tracking-tight',
                className
            )}
            {...props}
        />
    );
}

function DialogDescription({ className, ...props }: ViewProps) {
    return (
        <View
            className={cn('text-sm native:text-base text-muted-foreground', className)}
            {...props}
        />
    );
}

export {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
};