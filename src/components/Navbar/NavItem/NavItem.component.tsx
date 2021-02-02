import * as React from "react";
import "./nav-item.scss";

interface IProps {
  title: string;
  icon: string;
  index: number;
  activeItem: number;
  handleActiveItem(index: number): void;
}

export const NavItem = (props: IProps) => {
  const [withHover, handleWithHover] = React.useState(false);
  const handleMouseEnter = () => handleWithHover(true);
  const handleMouseLeave = () => handleWithHover(false);
  const handleClick = () => {
    props.handleActiveItem(props.index);
  };

  return (
    <div
      key={props.index}
      className={`
          nav-item ${withHover ? "hover" : ""}
        `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="nav-item__icon">
        <i className={props.icon} />
      </div>
      <div className="nav-item__title">{props.title}</div>
      {props.index === props.activeItem ? <div className="selected" /> : ""}
    </div>
  );
};
