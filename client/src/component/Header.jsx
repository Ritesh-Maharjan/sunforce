import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-scroll";

function Header() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}logout`)
      .then((res) => {
        console.log(res);
        dispatch(logout());
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  return (
    <div className="flex flex-col">
      <div className="fixed px-5 top-0 w-screen bg-blue-900 z-50">
        <div className="flex justify-between">
          <p className="md:text-xl xl:text-3xl font-black tracking-normal mx-2 text-white self-center">
            Sunforce Homes
          </p>
          <div className=" flex items-center p-2 text-white justify-between">
            <div
              onClick={(e) => setMenu(!menu)}
              className="flex items-center text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Menu</span>
            </div>
            <div className="hidden lg:flex">
              <ul className="row md:text-base xl:text-xl px-2">
                <NavLink
                  to="/"
                  activeClassName={{ color: "blue" }}
                  className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                >
                  <li>Home</li>
                </NavLink>
                {isLoggedIn && (
                  <NavLink
                    to="/gallery"
                    activeClassName={{ color: "blue" }}
                    className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                  >
                    <li>Gallery</li>
                  </NavLink>
                )}
                {!isLoggedIn && (
                  <>
                    <li>
                      <Link
                        smooth
                        to="about"
                        className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        smooth
                        spy
                        to="board of directors"
                        className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                      >
                        Board Of Directors
                      </Link>
                    </li>
                    <li>
                      <Link
                        smooth
                        spy
                        to="projects"
                        className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                      >
                        Our Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        smooth
                        spy
                        to="blog"
                        className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        smooth
                        spy
                        to="contact"
                        className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                      >
                        Contact
                      </Link>
                    </li>
                  </>
                )}
                <div className="text-end items-center md:self-center md:mx-5">
                  {isLoggedIn ? (
                    <button
                      className="tracking-normal md:text-base xl:text-xl py-2 px-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <NavLink to="/login">
                      <button className="tracking-normal md:text-base xl:text-xl py-2 px-2">
                        Login
                      </button>
                    </NavLink>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`w-screen ${!menu ? "hidden" : ""} lg:hidden relative`}>
          <ul className="fixed z-50 right-0 top-10 bg-blue-900 w-40 text-white">
            <NavLink
              to="/"
              className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
            >
              <li className="">Home</li>
            </NavLink>
            {isLoggedIn && (
              <NavLink
                to="/gallery"
                className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
              >
                <li className="border-t-[1px]">Gallery</li>
              </NavLink>
            )}
            {!isLoggedIn && (
              <>
                <li className="border-t-[1px]">
                  <Link
                    smooth
                    to="about"
                    className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li className="border-t-[1px]">
                  <Link
                    smooth
                    spy
                    to="board of directors"
                    className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                  >
                    Board Of Directors
                  </Link>
                </li>
                <li className="border-t-[1px]">
                  <Link
                    smooth
                    spy
                    to="projects"
                    className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                  >
                    Our Projects
                  </Link>
                </li>
                <li className="border-t-[1px]">
                  <Link
                    smooth
                    spy
                    to="blog"
                    className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
                <li className="border-t-[1px]">
                  <Link
                    smooth
                    spy
                    to="contact"
                    className="hover:no-underline hover:text-green-400 hover:cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn ? (
              <li className="border-t-[1px]" onClick={handleLogout}>
                Logout
              </li>
            ) : (
              <NavLink to="/login">
                <li className="border-t-[1px]">Login</li>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
