import { AcceptTask } from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ user }) => {
    return (
        <div id="tasklist" className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16">
            {user.tasks.map((ele, idx) => {
                if (ele.active) return <AcceptTask data={ele} key={idx} />;
                if (ele.completed) return <CompleteTask data={ele} key={idx} />;
                if (ele.newTask) return <NewTask data={ele} key={idx} />;
                if (ele.failed) return <FailedTask data={ele} key={idx} />;
            })}
        </div>
    );
};

export default TaskList;
