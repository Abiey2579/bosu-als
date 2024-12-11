import { Badge, Card, Rating } from "flowbite-react";
import FeaturedCourseImage from "../../../assets/images/image-1.jpg";
import { CustomCourseCard } from "../../../assets/Util/FlowbiteCustomTheme";
import { useNavigate } from "react-router-dom";

type CoursesListType = {
  title: string;
};

const CourseList: CoursesListType[] = [
  {
    title: "YouTube Success: Script, Shoot & Edit with MKBHD",
  },
  { title: "Blogging" },
  { title: "Affiliate Marketing" },
  { title: "Dropshipping" },
  { title: "Print On Demand" },
  { title: "Virtual Assistant" },
  { title: "Online Tutoring" },
  { title: "Stock Photography" },
  { title: "YouTube Channel" },
];

const MyCourses = () => {
  const navigateTo = useNavigate();

  const checkCourseAnalytics = (course: string) => {
    navigateTo("#course-analytics", { state: course });
  };

  return (
    <div className="px-6 pb-4 pt-8 space-y-4 flex-1 flex flex-col">
      <h1 className="font-semibold text-2xl font-league-spartan">My Courses</h1>

      <div className="grid grid-cols-4 gap-4">
        {CourseList.map((Course: CoursesListType) => (
          <Card
            key={Course.title}
            className="shadow-none hover:bg-slate-50 cursor-pointer"
            imgSrc={FeaturedCourseImage}
            theme={CustomCourseCard}
            onClick={() => checkCourseAnalytics(Course.title)}
          >
            <div className="flex justify-between items-center text-xs font-semibold">
              <span>21,000</span>
              <span>1h 13m</span>
            </div>
            <span>
              <h5 className="text-base font-bold tracking-tight text-dominance dark:text-white">
                {Course.title}
              </h5>
            </span>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Rating>
                  <Rating.Star className="text-wealth" />
                </Rating>

                <Badge className="ml-4 bg-success text-dominance">5.0</Badge>
              </div>
              {/* <BookmarkIcon className="w-5 hover:text-wealth" /> */}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
