import { FaRoad } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Login() {
    return (

    <div className="flex flex-col w-screen h-screen p-2 max-h-screen overflow-y-auto text-[#DBDBDB] bg-primary">

        
        <NavLink to="/" className="flex mt-6 w-full h-16 text-4xl space-x-4 items-center justify-center">
            <span className="font-bold text-accent">GamePage</span>
        </NavLink>

        <div className="flex w-full mt-16 h-full justify-center">
            <form className="flex flex-col p-8 border-t-8 shadow-2xl space-y-6 items-center border-accent w-2/5 h-4/5 bg-secondary">

                <div className="flex relative text-2xl">
                    <span>Register</span>
                </div>

                <div className="flex relative w-2/3 h-14">
                    <input type="text" id="username" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="username" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Username</label>
                </div>

                <div className="flex relative w-2/3 h-14">
                    <input type="password" id="password" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="password" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Password</label>

                </div>

                <div className="flex relative w-2/3 h-14">
                    <input type="password" id="password" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="password" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Confirm Password   </label>

                </div>

                <div className="flex relative w-2/3 h-14">
                    <input type="text" id="email" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="email" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Email</label>
                </div>

                <div className="flex relative w-2/3 h-14">
                    <input type="date" id="date" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="date" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">DoB</label>
                </div>

            </form>
        </div>
        
        
    </div>
    )
}