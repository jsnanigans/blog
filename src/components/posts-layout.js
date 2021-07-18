import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Common from "./Common";
import ListPosts from "./ListPosts";

const shortcodes = { Link };

export default ({ children }) => (
  <main>
    <Common />
    LAY
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
    --
    <ListPosts />
  </main>
);
