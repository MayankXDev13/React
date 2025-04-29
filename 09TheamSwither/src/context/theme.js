import { createContext, useContext } from "react";

/*
 * Creates a context object for managing the application's theme.
 * This context will hold the current theme mode (light or dark)
 * and functions to switch between these modes.
 */
export const ThemeContext = createContext({
  themeMode: "light", // Default theme mode is set to 'light'
  darkTheme: () => {}, // Function to switch to dark theme (initially an empty function)
  lightTheme: () => {}, // Function to switch to light theme (initially an empty function)
});

/*
 * Provides the ThemeContext to all child components within the
 * ThemeProvider. Any component wrapped by this provider can
 * access the theme values and functions.
 */
export const ThemeProvider = ThemeContext.Provider;

/*
 * Custom hook to easily access the theme context values and
 * functions within functional components.
 *
 * It utilizes the `useContext` hook from React, passing in the
 * `ThemeContext` to retrieve the context's current value.
 * This provides a convenient way to consume the theme context
 * without having to manually use `<ThemeContext.Consumer>`.
 */
export default function useTheme() {
  return useContext(ThemeContext);
}