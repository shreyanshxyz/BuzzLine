import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#101010")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode renders every component twice (in the initial render), only in development.
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>
);
