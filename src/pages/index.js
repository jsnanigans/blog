import React from "react";
import ListPosts from "../components/ListPosts";
import Page from "../components/Page";
import { ThemeProvider } from "../state/theme";

const IndexPage = ({ children }) => {
  return (
    <ThemeProvider>
      <Page>
        <ListPosts />
      </Page>
    </ThemeProvider>
  );
};

export default IndexPage;
