import React from "react";
import img1 from "../assest/images/image_1.jpg";
import img2 from "../assest/images/image_2.jpg";
import img3 from "../assest/images/image_3.jpg";

function Blog() {
  return (
    <div className="py-20 px-3 flex flex-col items-center" id="blog">
      <div className="text-center self-center mb-5 max-w-[500px] md:max-w-[720px] lg:max-w-[960px]">
        <h1 className="font-bold text-3xl tracking-wide py-3">Recent Blog</h1>
        <p className="tracking-wide text-gray-400">
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
        </p>
      </div>

      <div className="grid max-w-[500px] gap-5 md:grid-cols-2 md:max-w-[720px] lg:grid-cols-3 lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="self-center shadow-md">
          <div className="relative">
            <img className="z-10" src={img1} alt="" />
            <div className="absolute z-20 bg-purple-600 text-white bottom-0 p-2 flex flex-col items-center">
              <span className="font-black text-2xl">26</span>
              <span>June</span>
              <span>2019</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold py-3">
              Skills To Develop Your Child Memory
            </h3>
            <p className="py-2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="my-2 flex justify-between items-center">
              <button className="rounded-full text-white">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <div>
                <span className="text-orange-400 pr-2 font-semibold">
                  Admin
                </span>
                <span className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center shadow-md">
          <div className="relative">
            <img className="z-10" src={img2} alt="" />
            <div className="absolute z-20 bg-purple-600 text-white bottom-0 p-2 flex flex-col items-center">
              <span className="font-black text-2xl">26</span>
              <span>June</span>
              <span>2019</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold py-3">
              Skills To Develop Your Child Memory
            </h3>
            <p className="py-2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="my-2 flex justify-between items-center">
              <button className="rounded-full text-white">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <div>
                <span className="text-orange-400 pr-2 font-semibold">
                  Admin
                </span>
                <span className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center shadow-md">
          <div className="relative">
            <img className="z-10" src={img3} alt="" />
            <div className="absolute z-20 bg-purple-600 text-white bottom-0 p-2 flex flex-col items-center">
              <span className="font-black text-2xl">26</span>
              <span>June</span>
              <span>2019</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold py-3">
              Skills To Develop Your Child Memory
            </h3>
            <p className="py-2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="my-2 flex justify-between items-center">
              <button className="rounded-full text-white">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <div>
                <span className="text-orange-400 pr-2 font-semibold">
                  Admin
                </span>
                <span className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
