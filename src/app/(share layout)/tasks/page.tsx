import NewTaskCard from "@/components/NewTaskCard";
import QuizCard from "@/components/QuizCard";
import TaskCard from "@/components/TaskCard";
import TaskCategoryCard from "@/components/TaskCategoryCard";

const tasks = [
  {
    title: "Complete Quiz",
    points: "50",
    image: "/images/mama.webp",
  },
];

const Tasks = () => {
  return (
    <div className="container-fluid mx-auto p-6 mb-8 h-screen bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-6 text-center font-bold text-2xl text-white">
        {" "}
        Complete Task
        <p className="text-sm text-white font-normal">
          To score and earn coins{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <QuizCard />
        <TaskCategoryCard />
      </div>
    </div>
  );
};

export default Tasks;
