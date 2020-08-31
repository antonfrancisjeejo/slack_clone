import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import {
  AccessTime as AccessTimeIcon,
  Search as SearchIcon,
  HelpOutline as HelpOutlineIcon,
} from "@material-ui/icons";
import { useStateValue } from "../ContextApi/StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Seach Anton Francis Jeejo" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
