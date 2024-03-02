import s from "./footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.contents}>
          <ul>
            <li>spacex 2023</li>
            <li>twitter</li>
            <li>youtube</li>
            <li>instagram</li>
            <li>flickr</li>
            <li>linkedin</li>
            <li>privacy policy</li>
            <li>suppliers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
