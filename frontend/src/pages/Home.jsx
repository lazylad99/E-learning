import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";
import Course_Slider from "../components/core/Catalog/Course_Slider";

import { getCatalogPageData } from "../services/operations/pageAndComponentData";

import { MdOutlineRateReview } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "./../components/common/motionFrameVarients";

// background random images
import backgroundImg1 from "../assets/Images/random bg img/coding bg1.jpg";
import backgroundImg2 from "../assets/Images/random bg img/coding bg2.jpg";
import backgroundImg3 from "../assets/Images/random bg img/coding bg3.jpg";
import backgroundImg4 from "../assets/Images/random bg img/coding bg4.jpg";
import backgroundImg5 from "../assets/Images/random bg img/coding bg5.jpg";
import backgroundImg6 from "../assets/Images/random bg img/coding bg6.jpeg";
import backgroundImg7 from "../assets/Images/random bg img/coding bg7.jpg";
import backgroundImg8 from "../assets/Images/random bg img/coding bg8.jpeg";
import backgroundImg9 from "../assets/Images/random bg img/coding bg9.jpg";
import backgroundImg10 from "../assets/Images/random bg img/coding bg10.jpg";
import backgroundImg111 from "../assets/Images/random bg img/coding bg11.jpg";
import backgroundImg112 from "../assets/Images/random bg img/coding bg12.jpg";
import backgroundImg113 from "../assets/Images/random bg img/coding bg13.jpg";
import backgroundImg114 from "../assets/Images/random bg img/coding bg14.jpg";
import backgroundImg115 from "../assets/Images/random bg img/coding bg15.jpg";
import backgroundImg116 from "../assets/Images/random bg img/coding bg16.jpg";
import backgroundImg117 from "../assets/Images/random bg img/coding bg17.jpg";

const categories = [
    {
      name: 'Technology',
      description: 'Dive into the world of technology with our comprehensive courses covering programming languages, software development, cloud computing, cybersecurity, and more.',
      courses: ['Web Development', 'Data Science', 'Mobile App Development', 'Cybersecurity', 'Cloud Computing']
    },
    {
      name: 'Business & Finance',
      description: 'Gain valuable skills in business management, finance, marketing, entrepreneurship, and project management to succeed in today\'s competitive business landscape.',
      courses: ['Business Administration', 'Financial Management', 'Marketing Strategies', 'Entrepreneurship', 'Project Management']
    },
    {
      name: 'Creative Arts',
      description: 'Unleash your creativity and explore your artistic talents with courses in photography, graphic design, video production, music production, and creative writing.',
      courses: ['Photography Basics', 'Graphic Design Fundamentals', 'Video Editing Mastery', 'Music Composition', 'Creative Writing Workshop']
    },
    {
      name: 'Personal Development',
      description: 'Invest in yourself and enhance your personal and professional growth with courses focused on communication skills, leadership development, time management, mindfulness, and goal setting.',
      courses: ['Effective Communication', 'Leadership Essentials', 'Time Management Techniques', 'Mindfulness Practices', 'Goal Setting Strategies']
    },
    {
      name: 'Health & Wellness',
      description: 'Take care of your mind and body with courses that promote physical and mental well-being, including yoga, nutrition, meditation, stress management, and holistic health.',
      courses: ['Yoga for Beginners', 'Nutrition Fundamentals', 'Meditation Practices', 'Stress Relief Techniques', 'Holistic Health & Healing']
    }
  ];
  

const randomImges = [
//   backgroundImg112,
  backgroundImg113,
//   backgroundImg114,
//   backgroundImg115,
//   backgroundImg116,
//   backgroundImg117,
];

// hardcoded

const Home = () => {
  // get background random images
  const [backgroundImg, setBackgroundImg] = useState(null);

  useEffect(() => {
    const bg = randomImges[Math.floor(Math.random() * randomImges.length)];
    setBackgroundImg(bg);
  }, []);

  // console.log('bg ==== ', backgroundImg)

  // get courses data
  const [CatalogPageData, setCatalogPageData] = useState(null);
  const categoryID = "6506c9dff191d7ffdb4a3fe2"; // hard coded
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCatalogPageData = async () => {
      const result = await getCatalogPageData(categoryID, dispatch);
      setCatalogPageData(result);
      // console.log("page data ==== ",CatalogPageData);
    };
    if (categoryID) {
      fetchCatalogPageData();
    }
  }, [categoryID]);

  // console.log('================ CatalogPageData?.selectedCourses ================ ', CatalogPageData)

  return (
    <React.Fragment>
      {/* background random image */}
      <div>
        <div className="w-full h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
          <img
            src={backgroundImg}
            alt="Background"
            className="w-full h-full object-cover "
          />

          <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
        </div>
      </div>

      <div className=" ">
        {/*Section1  */}
        <div className="relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white ">
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-center text-3xl lg:text-4xl font-semibold mt-7  "
          >
            Innovate Your Skills,
            <HighlightText text={"Transform Your Life"} />
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300"
          >
            At Gyan Srijan, we believe in the power of continuous learning to
            drive personal and professional transformation. Whether you aim to
            advance your career or explore new interests, Gyan Srijan is here to
            support your journey. Innovate your skills, transform your life, and
            unlock your potential with us.{" "}
          </motion.div>

          <div className="flex flex-row gap-7 mt-8">
            <Link to={"/catalog/Indian-Culture"}>
              <div
                className="z-0 group p-1 mx-auto rounded-full bg-yellow-50 font-bold text-richblack-900
                                        transition-all duration-200 hover:scale-95 w-fit"
              >
                <div
                  className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                              transition-all duration-200 group-hover:bg-richblack-900"
                >
                  <p>Browse Courses</p>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* animated code */}
        <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
          {/* Code block 1 */}
          <div className="">
            <CodeBlocks
              position={"lg:flex-col"}
              heading={
                <div className="text-3xl lg:text-4xl font-semibold">
                  Explore Our Courses
                  <HighlightText text={"Our Courses "} />
                </div>
              }
              subheading={
                "Gyan Srijan offers a diverse selection of courses across various domains, including technology, business, arts, and personal development. Whether you're a beginner or an experienced professional, you'll find courses that meet your needs and help you achieve your goals."
              }
              ctabtn1={{
                btnText: "try it yourself",
                linkto: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "learn more",
                linkto: "/login",
                active: false,
              }}
            //   codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            //   codeColor={"text-yellow-25"}
            //   backgroundGradient={"code-block1-grad"}
            />
            <div className="explore-courses bg-gray-100 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <ul className="list-disc list-inside">
              {category.courses.map((course, i) => (
                <li key={i} className="text-gray-600">{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
          </div>

          {/* Code block 2 */}
          <div>
            <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
                  Start
                  <HighlightText text={"coding in seconds"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Continue Lesson",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-white"}
              codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
              backgroundGradient={"code-block2-grad"}
            />
          </div>

          {/* course slider */}
          {/* <div className='mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-6 text-2xl '>
                            Popular Picks for You 🏆
                        </h2>
                        <Course_Slider Courses={CatalogPageData?.selectedCategory?.courses} />
                    </div> */}
          {/* <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-6 text-2xl '>
                            Top Enrollments Today 🔥
                        </h2>
                        <Course_Slider Courses={CatalogPageData?.mostSellingCourses} />
                    </div> */}

          {/* <ExploreMore /> */}
        </div>

        {/*Section 2  */}
        {/* <div className='bg-pure-greys-5 text-richblack-700 '>
                    <div className='homepage_bg h-[310px]'>
                        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                            <div className='h-[150px]'></div>
                            <div className='flex flex-row gap-7 text-white '>
                                <CTAButton active={true} linkto={"/signup"}>
                                    <div className='flex items-center gap-3' >
                                        Explore Full Catalog
                                        <FaArrowRight />
                                    </div>
                                </CTAButton>
                                <CTAButton active={false} linkto={"/signup"}>
                                    <div>
                                        Learn more
                                    </div>
                                </CTAButton>
                            </div>
                        </div>
                    </div> */}

        {/* <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                        <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[95px]'>
                            <div className='text-3xl lg:text-4xl font-semibold w-full lg:w-[45%]'>
                                Get the Skills you need for a
                                <HighlightText text={"Job that is in demand"} />
                            </div>

                            <div className='flex flex-col gap-10 w-full lg:w-[40%] items-start'>
                                <div className='text-[16px]'>
                                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                                </div>
                                <CTAButton active={true} linkto={"/signup"}>
                                    <div>
                                        Learn more
                                    </div>
                                </CTAButton>
                            </div>
                        </div>


                        <TimelineSection />

                        <LearningLanguageSection />

                    </div> */}

        {/* </div> */}

        {/* 
                <div className='mt-14 w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                    <InstructorSection />

                    <h1 className="text-center text-3xl lg:text-4xl font-semibold mt-8 flex justify-center items-center gap-x-3">
                        Reviews from other learners <MdOutlineRateReview className='text-yellow-25' />
                    </h1>
                    <ReviewSlider />
                </div> */}

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
