import React from 'react';
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from 'react-icons/si';

function Footer() {
  return (
    <footer className="mt-5 p-10 flex justify-center">
      <a className="mx-2" href="https://github.com/Bibhuti5501">
        <SiGithub />
      </a>
      <a className="mx-2" href="https://www.linkedin.com/in/bibhutibhushansingh/">
        <SiLinkedin />
      </a>
      <a className="mx-2" href="https://www.instagram.com/bibhuti5501/">
        <SiInstagram />
      </a>
      {/* <a className="mx-2" href="https://x.com/BIBHUTI8765">
        <SiFacebook />
      </a> */}
    </footer>
  );
}

export default Footer;
