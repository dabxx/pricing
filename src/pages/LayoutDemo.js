import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { DemoNav } from "../interfaces";
import styles from "../css-files/Layout.module.css";

function LayoutDemo() {

  return (
    <Flex>
      <DemoNav />
      <div className={styles.appContent}>
        <main className={styles.main} style={{ marginTop: "0" }}>
          <Outlet />
        </main>
      </div>
    </Flex>
  );
}

export default LayoutDemo;
