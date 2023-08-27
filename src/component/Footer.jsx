import React from "react";
import { Stack, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Stack spacing={0} direction="row">
          <IconButton href="https://instagram.com">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://linkedin.com">
            <LinkedInIcon />
          </IconButton>
        </Stack>

        <p>&copy; 2022 thepizzadine.com</p>
      </div>
    </div>
  );
}

export default Footer;
