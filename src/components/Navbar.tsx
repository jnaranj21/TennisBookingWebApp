import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.scss";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
      <nav className="navigation">
        <Button
          onClick={showModal}
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
          type="button"
        >
          Sign up
        </Button>

        <Button onClick={showModal} buttonStyle="btn--outline" buttonSize="btn--medium" type='button'>
          Log in
        </Button>
      </nav>
    </>
  );
}

export default Navbar;