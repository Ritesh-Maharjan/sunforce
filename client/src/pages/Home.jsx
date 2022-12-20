import React from "react";
import Blog from "../component/Blog";
import Bod from "../component/Bod";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Info from "../component/Info";
import Project from "../component/Project";
import Service from "../component/Service";
import Teachers from "../component/Teachers";

function Home() {
  return (
    <div>
      <div className="bg-[url('../assest/images/123.jpg')] bg-cover bg-origin-border h-screen">
        <Header />
        <Hero />
      </div>
      <Service />
      <Info />
      <Project />
      <Teachers />
      <Bod />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
