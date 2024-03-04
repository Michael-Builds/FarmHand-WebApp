import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Use the root to render your application wrapped in MantineProvider
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
