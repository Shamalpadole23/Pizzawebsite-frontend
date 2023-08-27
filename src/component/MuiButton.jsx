import { Stack, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
       <Stack spacing={2} direction="row">
         <Button varient="contained" color="primary">Contained</Button>
         <Button varient="text" href="https://google.com">Text</Button>
       </Stack>
       <Stack>
        <Button varient="text" color="primary">Primary</Button>
       </Stack>
       <Stack spacing ={2}  direction="row">
        <Button varient="contained" startIcon={<SendIcon></SendIcon>}>Send</Button>
       </Stack>
       </Stack> 

    )
}