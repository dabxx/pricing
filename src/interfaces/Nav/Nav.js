import { NavLink } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import classes from "./Nav.module.css";
import { DashboardIcon } from "../";
// import Logo from "../../componentLibrary/components/Logo";

const appRoot = "/app";

export const Nav = () => {
  const linkClass = ({ isActive }) =>
    isActive ? `${classes.links} ${classes.active}` : classes.links;

  return (
    <Box className={classes.sidebar}>
      <div className={classes.logo}>
        <img src="/darkLogo.png" alt="" style={{ width: "98px" }} />
      </div>
      <nav className={classes.scrollBox} role="navigation">
        <ul className="list-none flex flex-col h-[inherit]">
          <li>
            <NavLink className={linkClass} to={appRoot + "/pricing-table"}>
              <DashboardIcon />
              <Text>Dashboard</Text>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Box>
  );
};
