import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  childen: "click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  //  tag name
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click to visit go "
);

createRoot(document.getElementById("root")).render(
  <App />);
