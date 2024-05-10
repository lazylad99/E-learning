import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
import MyProfile from "./MyProfile";
import TeachersList from "./TeachersList";

export default function Dashboard() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Sidebar /> */}
      <MyProfile />
      <TeachersList />
    </>
  );
}
