import React from "react";
import "./styles.css";
import { NavBar } from "./components/Navbar/NavBar.component";
import { NavItem } from "./components/Navbar/NavItem/NavItem.component";
import { navBarItems } from "./components/Navbar/navBarItems";

export default function App() {
  return (
    <div className="App">
      <NavBar withActions>
        {navBarItems.map(({ title, icon }, index) => (
          <NavItem key={index} title={title} icon={icon} />
        ))}
      </NavBar>
    </div>
  );
}
