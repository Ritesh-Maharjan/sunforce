import React from "react";
import abtImg from "../assest/images/about.jpg";

// Services
function Service() {
  return (
    <div>
      <div className="grid md:grid-cols-4">
        <div className="flex flex-col justify-center items-center bg-green-500 h-80 text-white  tracking-wider md:h-[450px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 h-16 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
          <h2 className="py-6 font-bold text-xl">Certified Teachers</h2>
          <p className="mx-5 text-center">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-900 h-80 text-white  tracking-wider md:h-[450px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>
          </div>
          <h2 className="py-6 font-bold text-xl">Special Education</h2>
          <p className="mx-5 text-center">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-green-500 h-80 text-white  tracking-wider md:h-[450px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <h2 className="py-6 font-bold text-xl">Book & Library</h2>
          <p className="mx-5 text-center">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-900 h-80 text-white  tracking-wider md:h-[450px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
          <h2 className="py-6 font-bold text-xl">Sports Clubs</h2>
          <p className="mx-5 text-center">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="px-5 py-5">
          <div>
            <h2 className="font-semibold tracking-wider text-2xl py-2">
              What We Offer
            </h2>
            <p className="tracking-wide py-3">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word.
            </p>
          </div>
          <div className="my-5 flex items-center">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 bg-green-500 rounded-full p-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <div className="mx-4">
              <h3 className="font-semibold text-2xl py-1">Safety First</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="my-5 flex items-center">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 bg-green-500 rounded-full p-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="mx-4">
              <h3 className="font-semibold text-2xl py-1">Regular Classes</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="my-5 flex items-center">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 bg-green-500 rounded-full p-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <div className="mx-4">
              <h3 className="font-semibold text-2xl py-1">
                Certified Teachers
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="my-5 flex items-center">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 bg-green-500 rounded-full p-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <div className="mx-4">
              <h3 className="font-semibold text-2xl py-1">
                Sufficient Classrooms
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="my-5 flex items-center">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 bg-green-500 rounded-full p-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <div className="mx-4">
              <h3 className="font-semibold text-2xl py-1">Creative Lessons</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="my-5 flex items-center">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 bg-green-500 rounded-full p-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            </div>
            <div className="mx-4">
              <h3 className="font-semibold text-2xl py-1">Sports Facilities</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:inline">
          <img src={`${abtImg}`} alt="abt img" className="h-full  w-full object-cover" />
        </div>
      </div>

    </div>
  );
}

export default Service;
