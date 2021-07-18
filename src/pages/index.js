import React from "react";
import Common from "../components/Common";
import ListPosts from "../components/ListPosts";

const IndexPage = ({ children }) => {
  return (
    <main>
      <Common />
      <ListPosts />
    </main>
  );
};

export default IndexPage;
