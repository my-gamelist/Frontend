import { FaSignInAlt } from 'react-icons/fa'
import Searchbar from "./Searchbar"
import LoginPopup from './LoginPopup'
import { useState, useRef } from 'react'

import { CgProfile } from 'react-icons/cg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie'

export default function Navbar() {
    const cookies = new Cookies();
    const user = cookies.get('username');
    const [username, setUsername] = useState<string>(user? user : "");
    const [showLoginPopup, setLoginPopup] = useState<boolean>(false);
    // const ref = useRef<HTMLButtonElement>(null);

    console.log("cookie user: ",user)

    const toggleLoginPopup = () => {
        setLoginPopup(!showLoginPopup);
        console.log(showLoginPopup);
    }

    return (
        <div className="flex w-full h-16 pl-2 bg-primary bg-opacity-30 items-center">
            <Searchbar />
            {username !== "" && (<span className="flex ml-96 mr-2 text-white">{username}</span>)}
            

            <NavLink className="flex ml-auto mr-2 p-1 bg-accent rounded-full"
                // ref={ref}
                to="/login"
                onClick={() => toggleLoginPopup()}>
                <CgProfile className="flex text-3xl text-gray-100" />
            </NavLink>
            <button className="flex mr-2 p-1">
                <BsThreeDotsVertical className="flex text-3xl text-gray-100" />
            </button>
            
            {/* <button className="flex absolute cursor-pointer transition ease-in-out delay-10 right-10 w-28 h-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white justify-center items-center rounded-full"
                onClick={() => toggleLoginPopup()}>
                <span className="flex absolute w-full h-full left-3 text-3xl text-white"><CgProfile /></span>
            </button> */}
            {/* {showLoginPopup && (<LoginPopup
                setLoginPopup={(isOpen: boolean) => setLoginPopup(isOpen)}
                profileRef={ref} />)} */}
            {/* <div className="flex absolute left-10 w-28 h-10 text-lg font-bold text-white justify-center items-center">
                <span className="cursor-pointer">Top Games</span>
            </div>
            <div className="flex absolute left-44 w-34 h-10 text-lg font-bold text-white justify-center items-center">
                <span className="cursor-pointer">Popular Games</span>
            </div> */}
        </div>
    )
}