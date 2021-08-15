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
        <div className="teaser" key={post.slug}>
          <Link to={`/${post.slug}`}>
            <div className="text">
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.lead}</p>
            </div>

            <div className="bg" aria-hidden>
              <div className="box">
                <img className="icon" src={post.frontmatter.image} />
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.lead}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListPosts;
