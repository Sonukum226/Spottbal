import React from "react";
import { UserListItem } from "./UserListItem";

const UserCard = ({ userId }) => {
  const id = userId;

  return (
    <div className="users-list">
      {id.map((id) => (
        <UserListItem key={id.id} user={id} />
      ))}
    </div>
  );
};

export default UserCard;
