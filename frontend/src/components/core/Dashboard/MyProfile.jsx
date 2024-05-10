import React from "react";
import { formattedDate } from "../../../utils/dateFormatter";
import { RiEditBoxLine } from "react-icons/ri";
import IconBtn from "../../common/IconBtn";
import Img from "../../common/Img";
import profilePic from "../../../assets/Images/teacher.png";


const MyProfile = ({ firstName, lastName, email, about, contactNumber, dateOfBirth, gender }) => {
  return (
    <div>
      <div className="container flex justify-center flex-col mb-0 p-20">
        <h1 className="mb-14 text-4xl font-medium text-richblack-5 font-semibold text-center sm:text-left">
          {" "}
          My Profile
        </h1>

        <div className="flex items-center justify-between rounded-2xl border-[1px] border-richblack-700 bg-richblack-800 p-8 px-3 sm:px-12">
          <div className="flex items-center gap-x-4">
            <Img
              src={profilePic}
              alt={`profile-${firstName}`}
              className="aspect-square w-[78px] rounded-full object-cover"
            />
            <div className="space-y-1">
              <p className="text-lg font-semibold text-richblack-5 capitalize">
                {firstName + " " + lastName}
              </p>
              <p className="text-sm text-richblack-300">{email}</p>
            </div>
          </div>

          <IconBtn
            text="Edit"
            onclick={() => {
              // Handle edit action
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        <div className="my-10 flex flex-col gap-y-10 rounded-2xl border-[1px] border-richblack-700 bg-richblack-800 p-8 px-7 sm:px-12">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">About</p>
            <IconBtn
              text="Edit"
              onclick={() => {
                // Handle edit action
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>

          <p
            className={`${
              about
                ? "text-richblack-5"
                : "text-richblack-400"
            } text-sm font-medium`}
          >
            {about ?? "Write Something About Yourself"}
          </p>
        </div>

        <div className="my-10 flex flex-col gap-y-10 rounded-2xl border-[1px] border-richblack-700 bg-richblack-800 p-8 px-7 sm:px-12">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">
              Personal Details
            </p>
            <IconBtn
              text="Edit"
              onclick={() => {
                // Handle edit action
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>

          <div className="flex max-w-[500px] justify-between ">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">First Name</p>
                <p className="text-sm font-semibold text-richblack-5 capitalize">
                  {firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Gender</p>
                <p className="text-sm font-semibold text-richblack-5">
                  {gender ?? "Add Gender"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Email</p>
                <p className="text-sm font-semibold text-richblack-5">
                  {email}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                <p className="text-sm font-semibold text-richblack-5">
                  {formattedDate(dateOfBirth) ?? "Add Date Of Birth"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                <p className="text-sm font-semibold text-richblack-5 capitalize">
                  {lastName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
                <p className="text-sm font-semibold text-richblack-5">
                  {contactNumber ?? "Add Contact Number"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
