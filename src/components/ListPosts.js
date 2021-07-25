import { useStaticQuery, graphql, Link } from "gatsby";
import "./ListPosts.css";
import React from "react";

function ListPosts() {
  const { allMdx: posts } = useStaticQuery(graphql`
    query Posts {
      allMdx {
        nodes {
          frontmatter {
            title
            lead
          }
          slug
          timeToRead
          id
        }
      }
    }
  `);

  console.log(posts);

  return (
    <div className="layout">
      {posts.nodes.map((post) => (
        <div className="teaser" key={post.slug}>
          <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
          <p>{post.frontmatter.lead}</p>
        </div>
      ))}
    </div>
  );
}

export default ListPosts;
