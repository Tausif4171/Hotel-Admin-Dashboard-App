import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';


export default function Edit() {
    const [italic, setItalic] = React.useState(false);
    const [fontWeight, setFontWeight] = React.useState('normal');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <FormControl>
            <FormLabel>Please enter the new description below:</FormLabel>
            <Textarea
                placeholder="Type something here…"
                minRows={2}
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


                        <Button sx={{ ml: 'auto' }}>Update</Button>
                    </Box>
                }
                sx={{
                    minWidth: 300,
                    fontWeight,
                    fontStyle: italic ? 'italic' : 'initial',
                }}
            />
        </FormControl>
    );
}
