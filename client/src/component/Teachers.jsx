import React from "react";
import teacher1 from "../assest/images/teacher-1.jpg";
import teacher2 from "../assest/images/teacher-2.jpg";
import teacher3 from "../assest/images/teacher-3.jpg";
import teacher4 from "../assest/images/teacher-4.jpg";


// Board of Directors
function Teachers() {
  return (
    <div className="py-8 flex flex-col justify-center" id="board of directors">
      <div className="max-w-2xl self-center text-center p-5">
        <h1 className="text-4xl font-bold tracking-wide py-3">
          Board of Directors
        </h1>
        <p className="py-3">
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>

      <div className="grid m-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 ">
        <div className="my-4">
          <div>
            <img src={`${teacher1}`} alt="Course 1" />
          </div>
          <div className="text-center m-2">
            <h1 className="text-2xl font-semibold py-2">Bianca Wilson</h1>
            <span className="text-orange-400 tracking-widest font-semibold">Teacher</span>
            <p className="py-2 tracking-wide">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="my-4">
          <div>
            <img src={`${teacher2}`} alt="Teacher 2" />
          </div>
          <div className="text-center m-2">
            <h1 className="text-2xl font-semibold py-2">Mitch Parker</h1>
            <span className="text-orange-400 tracking-widest font-semibold">Teacher</span>
            <p className="py-2 tracking-wide">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="my-4">
          <div>
            <img src={`${teacher3}`} alt="Teacher 3" />
          </div>
          <div className="text-center m-2">
            <h1 className="text-2xl font-semibold py-2">Stella Smith</h1>
            <span className="text-orange-400 tracking-widest font-semibold">Teacher</span>
            <p className="py-2 tracking-wide">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="my-4">
          <div>
            <img src={`${teacher4}`} alt="Teacher 4" />
          </div>
          <div className="text-center m-2">
            <h1 className="text-2xl font-semibold py-2">Monshe Henderson</h1>
            <span className="text-orange-400 tracking-widest font-semibold">Teacher</span>
            <p className="py-2 tracking-wide">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
