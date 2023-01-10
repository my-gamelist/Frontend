import { useState } from "react";
import { FaRoad } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Dropdown from "../component/Dropdown";

export default function Login() {

    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)

    const [currentMonth, setMonth] = useState<string>("Month")

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"]
    return (

    <div className="flex flex-col w-screen h-screen p-2 max-h-screen overflow-y-auto text-[#DBDBDB] bg-primary">

        
        <NavLink to="/" className="flex mt-6 w-full h-16 text-4xl space-x-4 items-center justify-center">
            <span className="font-bold text-accent">GamePage</span>
        </NavLink>

        <div className="flex w-full mt-16 h-full justify-center">
            <form className="flex flex-col p-6 border-t-8 shadow-2xl space-y-6 items-center border-accent w-2/5 h-4/5 bg-secondary">

                <div className="flex relative text-2xl">
                    <span>Register</span>
                </div>

                <div className="flex z-0 relative w-2/3 h-14">
                    <input type="text" id="username" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="username" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Username</label>
                </div>

                <div className="flex z-0 relative w-2/3 h-14">
                    <input type="password" id="password" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="password" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Password</label>

                </div>

                <div className="flex z-0 relative w-2/3 h-14">
                    <input type="password" id="confirmpassword" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="confirmpassword" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Confirm Password   </label>

                </div>

                <div className="flex z-0 relative w-2/3 h-14">
                    <input type="text" id="email" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                    <label htmlFor="email" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Email</label>
                </div>

                <div className="flex relative space-x-4 w-full flex-row h-14 z-0">

                    <div className="flex relative w-1/2 flex-col h-full">
                        
                        {toggleDropdown &&
                        <Dropdown
                            list={months}
                            selected={setMonth}
                            dropActive={setToggleDropdown}
                        />}
                        <div className="flex rounded-md px-4 pb-2.5 pt-2.5 items-center text-md z-20 absolute w-full h-full bg-[#202123]"

                            
                            onClick={() => setToggleDropdown(!toggleDropdown)}>
                            <span className="flex">{currentMonth}</span>
                        </div>
                        
                        {/* <label htmlFor="date" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Month</label> */}

                    </div>
                    <div className="flex relative w-1/6 flex-row h-14">
                        <input type="text" id="date" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                        <label htmlFor="date" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Day</label>

                    </div>
                    <div className="flex relative w-1/3 flex-row h-14">
                        <input type="text" id="date" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-accent peer" placeholder=" " />
                        <label htmlFor="date" className="absolute text-md pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Year</label>

                    </div>
                </div>

            </form>
        </div>
        
        
    </div>
    )
}