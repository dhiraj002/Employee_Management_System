import React from "react";

export const AcceptTask = ({ data }) => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600  px-3 py-1 rounded ">{data.category}</h3>
                <h4 className="text-sm"> {data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="text-sm mt-2">{data.taskDescription}</p>
            <div className="flex justify-between m-4 gap-2">
                <button className="bg-green-600 py-1 px-2 text-sm rounded-lg">Mark as Completed</button>
                <button className="bg-red-600 py-1 px-2 text-sm rounded-lg">Mark as Failed</button>
            </div>
        </div>
    );
};