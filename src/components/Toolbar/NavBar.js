import NavBtn from "./NavBtn"
import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../style/NavBar.css";

export default function NavBar() {
  const history = useHistory();

  const [navOptions, setNavOptions] = useState([
    { text: "HOME", path: "/", selected: true },
    { text: "PORTFOLIO", path: "/portfolio", selected: false },
    { text: "RESUME", path: "/resume", selected: false },
    { text: "BLOG", path: "/blog", selected: false },
    { text: "CONNECT", path: "/connect", selected: false },
  ])

  const navigateToLink = (selectedNavOption) => {
    debugger
    const updatedNavOptions = navOptions.map(navOption => {
      if (selectedNavOption.text === navOption.text) {
        return {...navOption, selected: true}
      } else {
        return {...navOption, selected: false}
      }
    })

    setNavOptions(updatedNavOptions)
    history.push(selectedNavOption.path)
  }

  return (
    <div className="nav">
      {navOptions.map((item, idx) => (
        <NavBtn key={idx} navOption={item} onClick={() => navigateToLink(item)} />
      ))}
    </div>
  );
}
