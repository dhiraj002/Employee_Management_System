import { useState } from "react";

const Login = ({ handleLogin }) => {
    let submiltHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    };

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20">
                <form onSubmit={(e) => submiltHandler(e)} className="flex flex-col items-center justify-center">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-2 outline-noneborder-emerald-600 py-3 px-5 rounded-full bg-transparent placeholder:text-gray-400"
                        type="email"
                        placeholder="Enter your Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 mt-2 outline-noneborder-emerald-600 py-3 px-5 rounded-full bg-transparent placeholder:text-gray-400"
                        type="password"
                        placeholder="Enter your Password"
                    />
                    <button className="border-2 mt-7 text-White  outline-noneborder-emerald-600 py-3 px-5 rounded-full bg-emerald-600 outline-none placeholder:text-white">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
