import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Page from "../components/Page";
import { ThemeProvider } from "../state/theme";

const shortcodes = { Link };

export default ({ children }) => (
  <ThemeProvider>
    <Page>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Page>
  </ThemeProvider>
);
