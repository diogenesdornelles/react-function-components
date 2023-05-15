import React from 'react';
import { Navbar } from 'flowbite-react';

function Nav() {
  return (
    <Navbar
      fluid={true}
      rounded={false}
      className="shadow-lg flex justify-end"
      style={{ background: 'rgb(49 196 141)' }}
    >
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/navbars"
          active={true}
          className="text-white"
          style={{ color: 'white' }}
        >
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
