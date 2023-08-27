// import { useState } from "react";
// import {Box }from "@mui/material";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import {List} from "@mui/material";
// import {ListItem} from "@mui/material";
// import {ListItemText} from "@mui/material";
// import Divider from"@mui/material/Divider";
// import{ IconButton} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu"
// import { makeStyles } from "@mui/material/styles";
// // import useRouter from "next/router"

// const useStyles = makeStyles({
// List:{
//     width:250,
// }
// });

// export default function Drawer(){
//     const classes = useStyles();
//     // const router = useRouter();
//     const [open, setOpen] = useState<Boolean>(false);
//     return (
//         <div>
//             <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick = {() => setOpen(true)}
//             >
//                 <MenuIcon />
//             </IconButton>
//             <SwipeableDrawer
//             anchor="left"
//             open={open}
//             onClose={() => setOpen(false)}
//             onOpen={() => {}}
//             >
//                 <div classes={setOpen(false)}>
//                 <Box textAlign="center" p={2}>
//                 Components    
//                 </Box> 
//                 <Divider />
//                 <List>
//                     <ListItem button onClick={() => {}}>
//                         <ListItemText primary={'Home'}></ListItemText>
//                     </ListItem>
//                     <ListItem button onClick={() => {}}>
//                         <ListItemText primary={'Menu'}></ListItemText>
//                     </ListItem>
//                     <ListItem button onClick={() => {}}>
//                         <ListItemText primary={'About'}></ListItemText>
//                     </ListItem>
//                     <ListItem button onClick={() => {}}>
//                         <ListItemText primary={'Contact'}></ListItemText>
//                     </ListItem>
//                 </List>
//                 </div>
               
//             </SwipeableDrawer>
//         </div>
//     )
// }