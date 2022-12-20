import React from "react";
import bg5 from "../assest/images/bg_5.jpg";

function Quote() {
  return (
    <div className="bg-orange-600 flex">
      <div>
        <img src={bg5} alt="Background" className=" opacity-50" />
      </div>
      <div className="absolute p-40 text-white">
        <h1 className="font-bold text-[40px] tracking-wide">Request A Quote</h1>
        <p className="my-10 text-xl tracking-wider">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <form className="flex flex-col">
        </form>
      </div>
    </div>
  );
}

export default Quote;
