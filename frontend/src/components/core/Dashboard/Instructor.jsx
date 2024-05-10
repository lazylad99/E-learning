import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase"; // Import your Firestore instance

import InstructorChart from "./InstructorDashboard/InstructorChart";
// import Img from "../../components/common/Img";

export default function Instructor() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState([]);
  const [courses, setCourses] = useState([]);

  // Fetch instructor data from Firestore
  useEffect(() => {
    const fetchInstructorData = async () => {
      setLoading(true);
      try {
        const teachersRef = collection(db, "teachers"); // Reference to "teachers" collection
        const querySnapshot = await getDocs(teachersRef);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setInstructorData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching instructor data:", error);
        setLoading(false);
      }
    };
    fetchInstructorData();
  }, []);

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5 text-center sm:text-left">
          Hi {user?.firstName} 👋
        </h1>
        <p className="font-medium text-richblack-200 text-center sm:text-left">
          Let's start something new
        </p>
      </div>

      {loading ? (
        // Skeleton loading
        <div>{/* Skeleton loading component */}</div>
      ) : (
        <div>
          {/* Render chart / graph */}
          <InstructorChart courses={instructorData} />

          {/* Total Statistics */}
          <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
            <p className="text-lg font-bold text-richblack-5">Statistics</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-lg text-richblack-200">Total Courses</p>
                <p className="text-3xl font-semibold text-richblack-50">
                  {courses.length}
                </p>
              </div>
              {/* Add more statistics as needed */}
            </div>
          </div>

          {/* Render courses */}
          <div className="rounded-md bg-richblack-800 p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-richblack-5">Your Courses</p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-yellow-50 hover:underline">
                  View All
                </p>
              </Link>
            </div>

            <div className="my-4 flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 ">
              {instructorData.map((instructor) => (
                <div key={instructor.id} className="sm:w-1/3 flex flex-col items-center justify-center">
                  {/* Display instructor data */}
                  {/* <Img
                    src={instructor.thumbnail}
                    alt={instructor.courseName}
                    className="h-[201px] w-full rounded-2xl object-cover"
                  /> */}
                  {/* Display other instructor details */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
