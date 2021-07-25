import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const themeActions = {
  setTheme: "SET_THEME",
};

function themeReducer(state, action) {
  switch (action.type) {
    case themeActions.setTheme:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: "dark" });
  const value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const { state, dispatch } = useContext(ThemeContext);
  return [state, dispatch];
}

export { ThemeProvider, themeActions, useTheme };
