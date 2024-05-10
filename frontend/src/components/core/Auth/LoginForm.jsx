import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    accountType: "student", // Default to student
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password, accountType } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/auth/${accountType}/login`,
        {
          // Endpoint based on accountType
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Redirect based on the user's account type
      if (accountType === "student") {
        navigate("/dashboard/student");
      } else if (accountType === "instructor") {
        navigate("/dashboard/instructor");
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-none"
        />
      </label>

      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>

      <label className="w-full">
        <p className=" text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Login As <sup className="text-pink-200">*</sup>
        </p>
      </label>
      <div className="flex items-center">
        <input
          type="radio"
          id="student"
          name="accountType"
          value="student"
          checked={accountType == "student"}
          onChange={handleOnChange}
        />
        <label htmlFor="student" className="ml-2 text-richblack-5">
          Student
        </label>
        <input
          type="radio"
          id="instructor"
          name="accountType"
          value="instructor"
          checked={accountType == "instructor"}
          onChange={handleOnChange}
          className="ml-4"
        />

        <label htmlFor="instructor" className="ml-2 text-richblack-5">
          Instructor
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
