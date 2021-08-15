import { Link } from "gatsby";
import React from "react";

export default function ListItem({ post }) {
  const [w, setW] = React.useState(15);
  const el = React.useRef(null);

  const handleMouse = (e) => {
    const elLeft = el.current.getBoundingClientRect().left;
    const mousePosition = e.pageX || e.touches[0].pageX;
    setW(((mousePosition - elLeft + 20) / el.current.offsetWidth) * 100);
  };

  return (
    <div
      className="teaser"
      ref={el}
      onMouseMove={handleMouse}
      onTouchMove={handleMouse}
    >
      <Link to={`/${post.slug}`}>
        <div className="text">
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.lead}</p>
        </div>

        <div className="bg" aria-hidden style={{ width: w + "%" }}>
          <div className="box">
            <img className="icon" src={post.frontmatter.image} />
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.lead}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
