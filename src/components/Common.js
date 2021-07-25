import React from "react";
import { Helmet } from "react-helmet";
import "../pages/page.css";

function Common() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@481&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </div>
  );
}

export default Common;
