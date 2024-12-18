import "../assets/cardCss.css";

import React from "react";
import Nav from "../components/nav";
import ContentBody from "../components/contentBody";
import Card from "../components/card";

const Html = () => {
  return (
    <div>
      <Nav />
      <header className="home-page">
        <ContentBody pageName={"HTML </>"} />
      </header>

      <section >
        <Card title={"Lenovo"} list={["Phone 1", "Phone 2", "Phone 3"]} />
        <Card title={"Addides"} list={["Phone 1", "Phone 2", "Phone 3"]} />
        <Card title={"Addides"} list={["Phone 1", "Phone 2", "Phone 3"]} />
        <Card title={"Addides"} list={["Phone 1", "Phone 2", "Phone 3"]} />
        <Card title={"Addides"} list={["Phone 1", "Phone 2", "Phone 3"]} />
        <Card title={"Addides"} list={["Phone 1", "Phone 2", "Phone 3"]} />
        <Card title={"IPhone"} list={["Phone 1", "Phone 2", "Phone 3"]} />

      </section>
    </div>
  );
};

export default Html;
