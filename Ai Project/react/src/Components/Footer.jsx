import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";

function Footer() {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        <p>Bot by Rabia Majeed</p>
        <p className="icons">
          <FacebookIcon />
          <TwitterIcon />
          <MailIcon />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
