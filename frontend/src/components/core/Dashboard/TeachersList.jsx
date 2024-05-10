import { useState } from "react";
import IconBtn from "../../common/IconBtn";
import { Link } from "react-router-dom";
import profilePic from "../../../assets/Images/teacher.png";
import profilePic2 from "../../../assets/Images/teacher2.png";

const TeachersList = () => {
    const [subscribedTeachers, setSubscribedTeachers] = useState([
        // Sample data, replace with actual subscribed teachers' data
        { id: 1, name: "Gaurav Kumar", profilePic: profilePic, subscribed: true },
        { id: 2, name: "Prince Rajput", profilePic: profilePic2, subscribed: false },
        // Add more teachers as needed
    ]);

    // Function to toggle subscription status
    const toggleSubscription = (teacherId) => {
        setSubscribedTeachers(prevTeachers =>
            prevTeachers.map(teacher =>
                teacher.id === teacherId ? { ...teacher, subscribed: !teacher.subscribed } : teacher
            )
        );
    };

    return (
        <div className="container flex justify-center flex-col p-20">
            <div className="my-10 flex flex-col gap-y-10 rounded-2xl border-[1px] border-richblack-700 bg-richblack-800 p-8 px-7 sm:px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-richblack-5">Subscribed Teachers</p>
                </div>
                {subscribedTeachers.map(teacher => (
                    <div key={teacher.id} className="flex items-center justify-between py-4 border-b border-richblack-700">
                        <div className="flex items-center gap-x-4">
                            <img src={teacher.profilePic} alt={teacher.name} className="w-12 h-12 rounded-full object-cover" />
                            <Link to={`/dashboard/instructor`} className="text-lg font-semibold text-richblack-5">{teacher.name}</Link>
                        </div>
                        <div>
                            {teacher.subscribed ? (
                                <IconBtn text="Remove" onclick={() => toggleSubscription(teacher.id)} />
                            ) : (
                                <IconBtn text="Add" onclick={() => toggleSubscription(teacher.id)} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachersList;
