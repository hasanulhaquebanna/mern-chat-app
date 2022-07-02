import * as React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";

import { extendTheme } from "@chakra-ui/react";
import ChatProvider from "context/ChatContext";

const theme = extendTheme({
  colors: {
    btnPrimary: {
      100: "#ffc801",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider theme={theme}>
        <App />
        <ToastContainer />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>
);
