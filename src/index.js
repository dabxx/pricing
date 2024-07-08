import React from "react";
import { createRoot } from "react-dom/client";
import {ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import theme from "./chakraTheme/theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
