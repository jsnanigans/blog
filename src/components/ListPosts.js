import styled from "@emotion/styled";
import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

const Layout = styled.div`
  /* Responsive grid layout */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

const PostTeaser = styled.div`
  /* Styled container */
  padding: 0.2rem;
  border-radius: 0.3rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 0 0 var(--primary-color);
  transition: all 0.2s ease-in-out;

  p {
    margin: 0.5rem 0 0;
  }

  a {
    font-weight: bold;
    font-size: 1.4em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

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
    <Layout>
      {posts.nodes.map((post) => (
        <PostTeaser key={post.slug}>
          <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
          <p>{post.frontmatter.lead}</p>
        </PostTeaser>
      ))}
    </Layout>
  );
}

export default ListPosts;
