import * as React from "react";
import "./nav-bar.scss";
import { Actions } from "./Actions/Actions.component";
import { useMediaQuery } from "./hooks";
import { NavItem } from "./NavItem/NavItem.component";

interface IProps {
  bgColor: string | undefined;
  withActions: boolean;
  children: typeof NavItem[];
}

const Logo = () => (
  <div className="nav-bar__logo">
    <i className="fab fa-reddit" />
  </div>
);

const NavItems = ({ navItems, activeItem, handleActiveItem }) => (
  <div className="nav-bar__items">
    {navItems.map((child, index) => {
      return React.cloneElement(child, {
        activeItem,
        handleActiveItem,
        index
      });
    })}
  </div>
);

const NavItemsWithMenu = ({children}) => {
  const [showNavItems, handleShowNavItems] = React.useState(false);
  const handleOnClick = () => handleShowNavItems(!showNavItems);
  return (
    <div className="nav-items-with-menu">
      <div className="menu" onClick={handleOnClick}>
        <i className="fas fa-bars"></i>
      </div>
      {showNavItems &&
        <div className="nav-bar__items--menu">
          {children}
        </div>
      }
    </div>
  )
};

export const NavBar = (props: IProps) => {
  const [windowWidth] = useMediaQuery();
  const [activeItem, handleActiveItem] = React.useState();
  return (
    <div className={`nav-bar ${windowWidth < 800 ? "with-menu" : ""}`}>
      <Logo />
      {windowWidth > 800 ?
        <NavItems
          navItems={props.children}
          activeItem={activeItem}
          handleActiveItem={handleActiveItem}
        /> :
        <NavItemsWithMenu>
          <NavItems
          navItems={props.children}
          activeItem={activeItem}
          handleActiveItem={handleActiveItem}
        />
        </NavItemsWithMenu>
      }
      {props.withActions && <Actions />}
    </div>
  );
};
