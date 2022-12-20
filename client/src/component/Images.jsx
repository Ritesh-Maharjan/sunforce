import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

function Images() {
  const [images, setImages] = useState();
  const [imgValue, setImgValue] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [image, setImage] = useState({});
  const [error, setError] = useState(true);
  const [popup, setPopup] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addImage = (e) => {
    const { files, value } = e.target;

    setImgValue(value);
    setError("");
    setImage(() => {
      return {
        images: files[0],
      };
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}images`)
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uploaded]);

  const submitPhoto = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photos", image.images);

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setUploaded(!uploaded);
        setImage({});
        setImgValue("");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          dispatch(logout());
          navigate("/login");
        }
        if (
          err.response.data === "Cannot read property 'filename' of undefined"
        ) {
          setError("Please select image");
        }
      });
  };

  const deletePhoto = (img) => {
    const { path } = img;
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}images`, {
        data: { path },
      })
      .then((res) => {
        setUploaded(!uploaded);
        setPopup(false)
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          dispatch(logout());
          navigate("/login");
        }
      });
  };
  return (
    <div className="relative h-[100vh]">
      {isLoggedIn && (
        <div className="py-20 flex flex-col items-center justify-center">
          {error && (
            <div>
              <div className="justify-start text-start text-3xl font-bold text-red-500 my-3">
                {error}
              </div>
            </div>
          )}
          <form className="flex justify-between items-center max-w-[720px] p-2 border rounded-lg">
            <div>
              <label htmlFor="img" className="text-xl font-bold mx-2">
                Select image:
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="font-bold "
                onChange={addImage}
                value={imgValue}
              />
            </div>
            <div>
              <button classname="w-[25%]" onClick={submitPhoto}>
                Upload
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 mt-5 mx-3 lg:grid-cols-4">
        {images?.length > 0 &&
          images.map((image, index) => {
            return (
              <div key={index}>
                <div className={`${ popup ? 'fixed' : 'hidden'} flex items-center justify-center h-full w-screen left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-10 bg-gray-900 bg-opacity-50 `}>
                  <div className="text-center flex flex-col justify-center items-center min-h-[250px] rounded-xl z-30 bg-white p-10 relative">
                    <div
                      onClick={() => setPopup(false)}
                      className="text-red-600 absolute top-0 right-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <h3 className="my-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this image?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <button className="bg-red-700" onClick={() => deletePhoto(image)}>Yes, I'm sure</button>
                      <button onClick={() => setPopup(false) }>No, cancel</button>
                    </div>
                  </div>
                </div>
                <div key={index} className="relative">
                  <img
                    src={`${process.env.REACT_APP_SERVER_URL}${image.path}`}
                    alt="image1"
                    className="h-[300px] w-full bg-contain"
                  />

                  {isLoggedIn && (
                    <div
                      onClick={() => setPopup(true)}
                      className="text-red-600 absolute top-0 right-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Images;
