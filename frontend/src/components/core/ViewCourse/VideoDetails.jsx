import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import "video-react/dist/video-react.css";
import { BigPlayButton, Player } from "video-react";

import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI";
import { updateCompletedLectures } from "../../../slices/viewCourseSlice";
import { setCourseViewSidebar } from "../../../slices/sidebarSlice";

import IconBtn from "../../common/IconBtn";

import { HiMenuAlt1 } from "react-icons/hi";

// Dummy video data
const dummyVideoData = {
  title: "Video Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna eget est elementum dignissim ac id orci. Nulla facilisi. Vivamus ullamcorper libero eget velit feugiat, a finibus ipsum tincidunt. Quisque vel libero nec sapien lacinia pulvinar. Nulla facilisi. Vestibulum tincidunt sit amet purus vel auctor. Nullam id nisl a erat congue tincidunt nec et felis. Vestibulum ultricies ullamcorper dui at pharetra. ",
  videoUrl: "path_to_video",
};

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const playerRef = useRef(null);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { courseSectionData, courseEntireData, completedLectures } = useSelector(
    (state) => state.viewCourse
  );

  const [videoData, setVideoData] = useState(dummyVideoData);
  const [previewSource, setPreviewSource] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set preview source here
    setPreviewSource(courseEntireData.thumbnail);
  }, [courseEntireData]);

  // Handle Lecture Completion
  const handleLectureCompletion = async () => {
    setLoading(true);
    const res = await markLectureAsComplete(
      { courseId: courseId, subsectionId: subSectionId },
      token
    );
    if (res) {
      dispatch(updateCompletedLectures(subSectionId));
    }
    setLoading(false);
  };

  // Go to the next video
  const goToNextVideo = () => {
    // Logic for going to the next video
  };

  // Go to the previous video
  const goToPrevVideo = () => {
    // Logic for going to the previous video
  };

  // Check if the lecture is the first video of the course
  const isFirstVideo = () => {
    // Logic for checking if it's the first video
  };

  // Check if the lecture is the last video of the course
  const isLastVideo = () => {
    // Logic for checking if it's the last video
  };

  const { courseViewSidebar } = useSelector((state) => state.sidebar);

  // Hide course video, title, description if sidebar is open in small device
  if (courseViewSidebar && window.innerWidth <= 640) return null;



  return (
    <div className="container flex justify-center flex-col p-20">

    <div className="flex flex-col gap-5 text-white">

      {/* Open-close sidebar icons */}
      <div
        className="sm:hidden text-white absolute left-7 top-3 cursor-pointer"
        onClick={() => dispatch(setCourseViewSidebar(!courseViewSidebar))}
      >
        {!courseViewSidebar && <HiMenuAlt1 size={33} />}
      </div>

      {/* Video Player */}
      <div className="video-player-wrapper">
        {!videoData ? (
          <img
            src={previewSource}
            alt="Preview"
            className="h-full w-full rounded-md object-cover"
          />
        ) : (
          <Player
            ref={playerRef}
            aspectRatio="16:9"
            playsInline
            autoPlay
            onEnded={() => setVideoEnded(true)}
            src={videoData?.videoUrl}
          >
            <BigPlayButton position="center" />
            {/* Render When Video Ends */}
            {videoEnded && (
              <div className="video-end-overlay">
                {!completedLectures.includes(subSectionId) && (
                  <IconBtn
                    disabled={loading}
                    onclick={() => handleLectureCompletion()}
                    text={!loading ? "Mark As Completed" : "Loading..."}
                    customClasses="text-xl max-w-max px-4 mx-auto"
                  />
                )}
                <IconBtn
                  disabled={loading}
                  onclick={() => {
                    if (playerRef?.current) {
                      playerRef?.current?.seek(0);
                      setVideoEnded(false);
                    }
                  }}
                  text="Rewatch"
                  customClasses="text-xl max-w-max px-4 mx-auto mt-2"
                />

                <div className="mt-10 flex min-w-[250px] justify-center gap-x-4 text-xl">
                  {!isFirstVideo() && (
                    <button
                      disabled={loading}
                      onClick={goToPrevVideo}
                      className="blackButton"
                    >
                      Prev
                    </button>
                  )}
                  {!isLastVideo() && (
                    <button
                      disabled={loading}
                      onClick={goToNextVideo}
                      className="blackButton"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            )}
          </Player>
        )}
      </div>

      {/* Video Title */}
      <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>

      {/* Video Description */}
      <p className="pt-2 pb-6">{videoData?.description}</p>
    </div>
    </div>
  );
};

export default VideoDetails;
