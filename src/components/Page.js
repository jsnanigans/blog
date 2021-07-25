import Common from "../components/Common";
import React from "react";
import { useTheme } from "../state/theme";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

function Page({ children }) {
  const [{ theme }] = useTheme();
  return (
    <GeistProvider themeType={theme}>
      <main>
        <CssBaseline />
        <Common />
        {children}
      </main>
    </GeistProvider>
  );
}

export default Page;
