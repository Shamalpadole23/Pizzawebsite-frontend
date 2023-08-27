import React, {useState} from "react"
import ReorderIcon from "@mui/icons-material/Reorder";
import {Link} from "react-router-dom";
import { Stack, Button, IconButton} from "@mui/material";
import  '../styles/navbar.css';

function Navbar(){
    const [openLinks, setOpenLinks] = useState (false);
 
    const toggleNavbar = () => {
        setOpenLinks (!openLinks);
    }; 
    return( 
<div>  
    <div className="navbar"> 
        <div className="leftside" id={openLinks ? "open" : "close"}>
            <img src="https://image.freepik.com/vetores-gratis/design-de-logotipo-de-pizza_9845-319.jpg" alt="" />
            <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            </div>
        </div>
        <div className="rightside">
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>

     {/*   Start  of Material Ui Icons */}

     {/* Use of stack for button with icon */}

           {/* <Stack>
           <Button varient="contained" startIcon={<ReorderIcon></ReorderIcon>}></Button>
           </Stack> */}

           {/* Use Tag For Icon Only */}

           <IconButton onClick={toggleNavbar}>
       <ReorderIcon />
           </IconButton>

       {/* End  of Material Ui Icons  */}

        </div>
    </div>

    

</div>
    );
}
export default Navbar;