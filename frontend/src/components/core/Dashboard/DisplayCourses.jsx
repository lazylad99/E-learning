import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import Img from "../../common/Img";
import { AiFillPlayCircle } from "react-icons/ai"; // Import the video icon from react-icons library

// Dummy enrolled courses data
const dummyDisplayCourses = [
  {
    _id: "1",
    courseName: "Video 1", // Change the course name to "Video 1"
    courseDescription: "Description for video 1",
    thumbnail: "path_to_video_thumbnail_1",
    totalDuration: "10h",
    progressPercentage: 50,
  },
  {
    _id: "2",
    courseName: "Video 2", // Change the course name to "Video 2"
    courseDescription: "Description for video 2",
    thumbnail: "path_to_video_thumbnail_2",
    totalDuration: "15h",
    progressPercentage: 70,
  },
  // Add more dummy data as needed
];

export default function DisplayCourses() {
  const navigate = useNavigate();

  const [displayCourses, setDisplayCourses] = useState(null);

  // Simulate fetching enrolled courses
  useEffect(() => {
    // Set enrolled courses with dummy data after a delay to simulate fetching
    const fetchDisplayCourses = setTimeout(() => {
      setDisplayCourses(dummyDisplayCourses);
    }, 1000);

    // Clean up timeout
    return () => clearTimeout(fetchDisplayCourses);
  }, []);

  // Loading Skeleton
  const sklItem = () => {
    return (
      <div className="flex border border-richblack-700 px-5 py-3 w-full">
        <div className="flex flex-1 gap-x-4 ">
          <div className="h-14 w-14 rounded-lg skeleton "></div>

          <div className="flex flex-col w-[40%] ">
            <p className="h-2 w-[50%] rounded-xl  skeleton"></p>
            <p className="h-2 w-[70%] rounded-xl mt-3 skeleton"></p>
          </div>
        </div>

        <div className="flex flex-[0.4] flex-col ">
          <p className="h-2 w-[20%] rounded-xl skeleton mt-2"></p>
          <p className="h-2 w-[40%] rounded-xl skeleton mt-3"></p>
        </div>
      </div>
    );
  };

  // return if data is null
  if (!displayCourses) {
    return (
      <div>
        {sklItem()}
        {sklItem()}
        {sklItem()}
        {sklItem()}
        {sklItem()}
      </div>
    );
  }

  return (
    <>
      <div className="container flex justify-center flex-col p-20">
        <div className="text-4xl text-richblack-5 text-center sm:text-left">
          Course Videos
        </div>
        <div className="my-8 text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-2xl bg-richblack-800 ">
            <p className="w-[45%] px-10 py-3">Course Name</p>
            <p className="w-1/4 px-2 py-3">Duration</p>
          </div>

          {/* Course Names */}
          {displayCourses.map((course, i, arr) => (
            <div
              className={`flex flex-col sm:flex-row sm:items-center border border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-2xl" : "rounded-none"
              }`}
              key={course._id}
            >
              <div
                className="flex sm:w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                onClick={() => {
                  navigate(
                    `/viewcourse/:videoId/`
                  );
                }}
              >
                <Img
                  src={course.thumbnail}
                  alt="course_img"
                  className="h-14 w-14 rounded-lg object-cover"
                />

                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold">{course.courseName}</p>
                  <p className="text-xs text-richblack-300">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>

              {/* Video icon */}
              <div className="flex items-center text-yellow-500">
                <AiFillPlayCircle size={24} />
              </div>

              {/* only for smaller devices */}
              {/* duration -  progress */}
              <div className="sm:hidden">
                <div className=" px-2 py-3">{course.totalDuration}</div>
              </div>

              {/* only for larger devices */}
              {/* duration -  progress */}
              <div className="hidden w-1/5 sm:flex px-2 py-3">
                {course.totalDuration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
