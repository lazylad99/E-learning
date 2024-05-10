import { useEffect, useState } from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";
// import UpdatePassword from "./pages/UpdatePassword";
// import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import CourseDetails from "./pages/CourseDetails";
import Catalog from "./pages/Catalog";
import ViewCourse from "./pages/ViewCourse";

import Dashboard from "./components/core/Dashboard/Dashboard";
import Navbar from "./components/common/Navbar";
import Settings from "./components/core/Dashboard/Settings/Settings";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import Instructor from "./components/core/Dashboard/Instructor";
import Cart from "./components/core/Dashboard/Cart/Cart";
import EnrolledCourses from "./components/core/Dashboard/DisplayCourses";
import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";

import { ACCOUNT_TYPE } from "./utils/constants";

import { HiArrowNarrowUp } from "react-icons/hi";

function App() {
  const { user } = useSelector((state) => state.profile);

  // Scroll to the top of the page when the component mounts
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Go upward arrow - show , unshow
  const [showArrow, setShowArrow] = useState(false);

  const handleArrow = () => {
    if (window.scrollY > 500) {
      setShowArrow(true);
    } else setShowArrow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleArrow);
    return () => {
      window.removeEventListener("scroll", handleArrow);
    };
  }, [showArrow]);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />

      {/* go upward arrow */}
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={`bg-yellow-25 hover:bg-yellow-50 hover:scale-110 p-3 text-lg text-black rounded-2xl fixed right-3 z-10 duration-500 ease-in-out ${
          showArrow ? "bottom-6" : "-bottom-24"
        } `}
      >
        <HiArrowNarrowUp />
      </button>

      <Routes>
        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/update-password/:id" element={<UpdatePassword />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog/:catalogName" element={<Catalog />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/dashboard/student" element={<Dashboard />} />
        <Route path="/dashboard/edit-profile" element={<Settings />} />
        <Route path="/dashboard/cart" element={<Cart />} />
        <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses />}/>
        <Route path="/dashboard/instructor" element={<Instructor />} />
        <Route path="/dashboard/add-course" element={<AddCourse />} />
        <Route path="/dashboard/my-courses" element={<MyCourses />} />
        <Route path="/dashboard/edit-course/:courseId" element={<EditCourse />}/>
        <Route path="/viewcourse" element={<ViewCourse />} />
        <Route path="/viewcourse/:videoId/" element={<VideoDetails />}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
