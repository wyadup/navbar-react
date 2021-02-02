import * as React from "react";
import "./actions.scss";

export const Actions = () => {
  return (
    <div className="actions">
      <Action icon="fab fa-instagram" />
      <Action icon="fab fa-facebook" />
      <Action icon="fab fa-twitter" />
    </div>
  );
};

const Action = ({ icon }) => {
  const [withHover, handleWithHover] = React.useState(false);
  const handleMouseEnter = () => handleWithHover(true);
  const handleMouseLeave = () => handleWithHover(false);
  return (
    <div
      className={`action ${withHover ? "hover" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={icon} />
    </div>
  );
};
