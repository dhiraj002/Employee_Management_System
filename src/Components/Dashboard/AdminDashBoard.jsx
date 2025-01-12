import AllTask from "../../MiniComponents/AllTask";
import CreateTask from "../../MiniComponents/CreateTask";
import Header from "../../MiniComponents/Header";

const AdminDashBoard = ({ changeUser }) => {
    return (
        <>
            <div className="h-screen w-full p-10">
                <Header changeUser={changeUser} />
                <CreateTask />
                <AllTask />
            </div>
        </>
    );
};

export default AdminDashBoard;
