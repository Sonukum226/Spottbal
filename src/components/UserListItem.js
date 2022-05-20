import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function UserListItem(props) {
  const handleClick = (e) => {};

  return (
    <div className="users-item">
      <div className="users-name">
        {props.user}
        <span>
          <FontAwesomeIcon
            style={{ color: "blue" }}
            icon="trash"
            onClick={handleClick}
          />
        </span>
      </div>
    </div>
  );
}
