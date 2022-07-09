import React, { useState } from "react";

const HeaderContent = () => {
  const [isopen, setIsopne] = useState(false);

  const handleModal = () => {
    setIsopne(!isopen);
  };

  return (
    <div className="header-content">
      <div>
        <img src="/icons/site_logo.svg" alt="logo"></img>
      </div>
      <div>
        <img
          src="/icons/Icon_Menu.svg"
          alt="menu_icon"
          onClick={() => handleModal()}
          className="meun-button"
        ></img>
      </div>
      <div className={isopen ? "menu-modal" : "menu-modal hidden"}>
        <div className="menu-modal-header">
          <img
            src="/icons/Icon_Close.svg"
            alt="close_icon"
            onClick={() => handleModal()}
            className="close-icon-img"
          ></img>
        </div>
        <ul>
          <li>News</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderContent;
