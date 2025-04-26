import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Layout,
  Home,
  Contact,
  User,
  About,
  Github,
} from "./components/index.js";

import { githubInfoLoader } from "./Hooks/githubInfoLoader.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="about" element={<About />} />

      <Route path="contact" element={<Contact />} />

      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>

      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
