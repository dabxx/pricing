import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { Nav } from "../interfaces";
import styles from "../css-files/Layout.module.css";

function Layout() {
  return (
    <Flex>
      <Nav />
      <div className={styles.appContent}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </Flex>
  );
}

export default Layout;
