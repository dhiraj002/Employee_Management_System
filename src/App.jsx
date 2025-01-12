import AdminDashBoard from "./Components/Dashboard/AdminDashBoard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import Login from "./Components/Auth/Login";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "./Context/AuthProvider";
function App() {
    const [authData, setAuthdata] = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        // if (authData) {
        const loggedInUserData = localStorage.getItem("loggedInUser");

        if (loggedInUserData) {
            const userData = JSON.parse(loggedInUserData);

            setUser(userData.role);
            userData?.data && setLoggedInUser(userData.data);
        }
        // }
    }, []);

    const handleLogin = (email, password) => {
        if (email == "admin@a.com" && password == 123) {
            setUser("admin");
            localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        } else if (authData) {
            let employeedata = authData.find((e) => email == e.email && password == e.password);
            employeedata && setUser("employee");
            employeedata && setLoggedInUser(employeedata);
            employeedata && localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employeedata }));
        } else {
            alert("Invalid Crenditials");
        }
    };

    return (
        <>
            {!user ? <Login handleLogin={handleLogin} /> : ""}

            {user == "admin" ? <AdminDashBoard changeUser={setUser} /> : user == "employee" ? <EmployeeDashboard changeUser={setUser} user={loggedInUser} /> : null}
        </>
    );
}

export default App;
