import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Text } from "@/components/ui/text";
import { useState } from 'react';

export function DialogExample() {
    return (
        <Dialog>
            <DialogTrigger>
                <Text>Open Classic Dialog</Text>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle><Text>My Dialog</Text></DialogTitle>
                    <DialogDescription><Text>This is a simple dialog</Text></DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Text>Footer</Text>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export function ControlledDialogExample() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Text>Open Controlled Dialog</Text>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle><Text>Controlled Dialog</Text></DialogTitle>
                    <DialogDescription>
                        <Text>This dialog is controlled by state</Text>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onPress={() => setOpen(false)}>
                        <Text>Close Dialog</Text>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

