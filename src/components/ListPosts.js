import { useStaticQuery, graphql } from "gatsby";
import "./ListPosts.css";
import React from "react";
import ListItem from "./ListItem";

function ListPosts() {
  const { allMdx: posts } = useStaticQuery(graphql`
    query Posts {
      allMdx {
        nodes {
          frontmatter {
            title
            lead
            image
          }
          slug
          id
          timeToRead
        }
      }
    }
  `);

  console.log(posts);

  return (
    <div className="layout">
      {posts.nodes.map((post) => (
        <ListItem post={post} key={post.slug} />
      ))}
    </div>
  );
}

export default ListPosts;
