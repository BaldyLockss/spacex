//CSS IMPORT
import s from "./navbar.module.css";
//OTHER IMPORTS
import Logo from "../assets/svgs/logo";
// import Menu from "../assets/svgs/menu";
import { useState, useRef, useEffect } from "react";

// State imports

// setting the state to false as it is not active by default
//!active allows us to capture in less javascrip, otherwise would need 2, one saying true and the other false
// adding the gsap directory put the registry in the function
const Navbar = () => {
  const [active, setActive] = useState(false);

  // useRef is like the javascript get element by id
  const clickHandler = () => {
    setActive(!active);
  };
  //useEffect, call the gsap define a task use the reference and then animateinside an object

  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.contents}>
          <div className={s.logo}>
            <Logo />
          </div>
          <ul className={s.nav__ul}>
            <li data-text="falcon 9">falcon 9</li>

            <li>falcon heavy</li>

            <li>dragon</li>

            <li>starship</li>

            <li>human spaceflight</li>

            <li>rideshare</li>

            <li>starshield</li>

            <li>starlink</li>
          </ul>
        </div>
      </div>
      <div className={s.right__nav}>
        <p>shop</p>
        <button
          onClick={clickHandler}
          className={s.btn}
          aria-controls="right hand nav menu"
          aria-expanded={active}
        >
          <svg
            fill="var(--clr-white)"
            className={s.hamburger}
            viewBox="0 0 100 100"
            width="20"
          >
            {
              //when creating a svg we need to have a view box as standard here
              //adding the fill on the svg captures all the svg, this can also be done individually
              //the width and height is that of the viewbox and not the width of the overall size
              //the x is the position along the x axis, likewise the y
              //you can do radius using rx= and keep the number small as with css
              //style the outer button as normal. or remove all appearance leaving just the svg
              // aria should be added to buttons to show what that button does
            }

            <rect
              className={`${s.line} ${s.top}`}
              width="80"
              height="10"
              x="10"
              y="25"
            ></rect>
            <rect
              className={`${s.line} ${s.middle}`}
              width="80"
              height="10"
              x="10"
              y="45"
            ></rect>
            <rect
              className={`${s.line} ${s.bottom}`}
              width="80"
              height="10"
              x="10"
              y="65"
            ></rect>
          </svg>
        </button>
      </div>
      <div className={`${s.hidden__nav} ${active ? s.open : null}`}>
        <div className={s.right__nav__unhidden}>
          <nav className={s.right__nav__unhidden__contents}>
            <ul>
              <li className={s.main__li}>falcon 9</li>
              <li className={s.main__li}>falcon heavy</li>
              <li className={s.main__li}>dragon</li>
              <li className={s.main__li}>starship</li>
              <li className={s.main__li}>human spaceflight</li>
              <li className={s.main__li}>rideshare</li>
              <li className={s.main__li}>starshield</li>
              <li className={s.main__li}>starlink</li>
              <li>mission</li>
              <li>launches</li>
              <li>careers</li>
              <li>updates</li>
              <li>shop</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
