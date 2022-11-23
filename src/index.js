import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <App />
  </ChakraProvider>
);
