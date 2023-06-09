import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';

interface IProps {
    editDescription: boolean,
    setEditDescription: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Edit({ editDescription, setEditDescription }: IProps) {
    const [newDescription, setNewDescription] = React.useState('')
    console.log({ newDescription })

    function handleUpdate() {
        setEditDescription(!editDescription)
    }

    return (
        <FormControl>
            <FormLabel>Please enter the new description below:</FormLabel>
            <Textarea
                placeholder="Type something here…"
                minRows={2}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                endDecorator={
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 'var(--Textarea-paddingBlock)',
                            pt: 'var(--Textarea-paddingBlock)',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            flex: 'auto',
                        }}
                    >


                        <Button sx={{ ml: 'auto' }} onClick={handleUpdate}>Update</Button>
                    </Box>
                }
                sx={{
                    minWidth: 300,
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                }}
            />
        </FormControl>
    );
}
