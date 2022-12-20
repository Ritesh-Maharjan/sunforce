import React from "react";
import uniImg from "../assest/images/about-2.jpg";

// About us
function Info() {
    
    // "#fd5f00"
    return (
    <div className="bg-green-500 text-white py-20 px-12" id="about">
      <div className="grid md:grid-cols-2">
        <div className="w-[80%] justify-self-center ">
          <img src={uniImg} alt="Uni images" className="bg-cover h-full justify-self-center" />
        </div>
        <div>
          <h1 className="font-bold text-3xl tracking-wide py-3">About Us</h1>
          <p className="tracking-wide">
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <p className="tracking-wide py-3">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between">
        <div className="p-4 flex flex-col items-center">
            <h1 className="text-4xl font-black p-2">18</h1>
            <span>Certified Teachers</span>
        </div>
        <div className="p-4 flex flex-col ">
            <h1 className="text-4xl font-black p-2">401</h1>
            <span>Students</span>
        </div>
        <div className="p-4 flex flex-col ">
            <h1 className="text-4xl font-black p-2">30</h1>
            <span>Courses</span>
        </div>
        <div className="p-4 flex flex-col ">
            <h1 className="text-4xl font-black p-2">50</h1>
            <span>Awards Won</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
