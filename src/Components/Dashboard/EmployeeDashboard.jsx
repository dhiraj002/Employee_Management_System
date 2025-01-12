import Header from "../../MiniComponents/Header";
import TaskListNumber from "../../MiniComponents/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ user, changeUser }) => {
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header user={user} changeUser={changeUser} />
            <TaskListNumber user={user} />
            <TaskList user={user} />
        </div>
    );
};

export default EmployeeDashboard;
