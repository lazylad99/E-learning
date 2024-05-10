import DisplayCourses from "./DisplayCourses";
import MyProfile from "./MyProfile";

export default function Instructor() {
  // Dummy data for profile
  const dummyProfileData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    about: "I am a software engineer.",
    contactNumber: "1234567890",
    dateOfBirth: "1990-01-01",
    gender: "Male",
  };

  return (
    <div>
      <MyProfile {...dummyProfileData} />

      <DisplayCourses />
    </div>
  );
}
