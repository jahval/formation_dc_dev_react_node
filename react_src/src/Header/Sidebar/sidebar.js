import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/taches">
        Fait
      </a>

      <a className="menu-item" href="/recherche">
        En attente
      </a>

      <a className="menu-item" href="/historique">
        Historique
      </a>
    </Menu>
  );
};
