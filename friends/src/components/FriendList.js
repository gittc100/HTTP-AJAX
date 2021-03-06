import React from "react";
import Friend from "./Friend";
import './friends.css';

const FriendsList = props => {
  return (
    <div className="friendsList">
      {props.friends.map(item => {
        return <Friend key={item.id} data={item} deleteFriend={props.deleteFriend}/>;
      })}
    </div>
  );
};

export default FriendsList;
