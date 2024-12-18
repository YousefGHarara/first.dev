import React from "react";
import Nav from "../components/nav";
import ContentBody from "../components/contentBody";

const Css = () => {
  return (
    <div>
      <Nav />
      <header className="home-page">
        <ContentBody pageName={"CSS </>"}/>
      </header>
    </div>
  );
};

export default Css;
