import { FormEvent, useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import axios from "axios";
import Sidebar from "../component/Sidebar"

export default function Login() {
    const [loginStatus, setLoginStatus] = useState<string>("");
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as HTMLFormElement
        console.log("submitted");
        console.log(target.username.value);
        console.log(target.password.value);

        const username = target.username.value;
        const password = target.password.value;

        // fetch api to login, check if 401 is return



        // const res = await fetch("http://localhost:3000/api/auth/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     })
        // })

        const res = await axios.post("http://localhost:3000/api/auth/login", {
            username: username,
            password: password
        }, { withCredentials: true })


        if (res.status === 401) {
            console.log("invalid");
            setLoginStatus("invalid");
        }

        // on success, redirect to home page
        if (res.status === 200) {
            setLoginStatus("success");
        }
    }

    if (loginStatus === "success") {
        return <Navigate to="/" />
    }

    return (
        <div className="flex w-full h-full">
            <Sidebar />
            <div className="flex flex-col w-5/6 h-screen max-h-screen overflow-y-auto relative items-center bg-[#343541]">
                <span className="flex mt-24 text-6xl text-gray-100">Login</span>
                <form className="flex flex-col relative w-1/3 mt-10 space-y-5"
                    onSubmit={e => onSubmit(e)}>
                    <div className="flex relative w-full">
                        <input type="text" id="username" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-sky-500 peer" placeholder=" " />
                        <label htmlFor="username" className="absolute text-sm pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Username</label>
                    </div>
                    <div className="flex relative w-full">
                        <input type="password" id="password" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-sky-500 peer" placeholder=" " />
                        <label htmlFor="password" className="absolute text-sm pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Password</label>
                    </div>
                    <button type="submit" className="flex w-full h-14 text-xl text-gray-100 rounded-md items-center justify-center transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-sky-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">Login</button>
                </form>
                {loginStatus === "invalid" && <span className="flex text-red-500 mt-5">Invalid credentials</span>}
                <p className="flex text-gray-100 mt-10">Don't have an account?
                <span className="flex text-sky-500 ml-2 cursor-pointer hover:underline">Register here</span></p>
            </div>
        </div>
    )
}