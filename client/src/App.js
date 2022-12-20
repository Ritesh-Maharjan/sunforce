import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/features/userSlice";

function App() {
  const dispatch = useDispatch();

  axios.get(`${process.env.REACT_APP_SERVER_URL}loggedin`).then((res) => {
    console.log(res);
    if (res.data.username) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  });

  return (
    <div className="font-Inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
