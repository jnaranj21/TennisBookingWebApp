import React, { useState } from "react";
import "./Navbar.scss";
import Button from "./Button";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navigation">
        <Button onClick={showModal}>Sign up</Button>

        <Button onClick={showModal}>Log in</Button>
      </nav>
    </>
  );
}

export default Navbar;
