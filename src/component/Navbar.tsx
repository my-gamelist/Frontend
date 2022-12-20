import { FaSignInAlt } from 'react-icons/fa'
import Searchbar from "./Searchbar"
import LoginPopup from './LoginPopup'
import { useState } from 'react'

export default function Navbar() {
    const [showLoginPopup, setLoginPopup] = useState<boolean>(false);

    const toggleLoginPopup = () => {
        setLoginPopup(!showLoginPopup);
        console.log(showLoginPopup);
    }

    return (
        <div className="flex w-screen h-16 bg-white bg-opacity-30 justify-center items-center">
            <Searchbar />
            <button className="flex absolute cursor-pointer transition ease-in-out delay-10 right-10 w-28 h-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white justify-center items-center rounded-full"
                onClick={() => toggleLoginPopup()}>
                <span className="flex absolute left-3 text-white"><FaSignInAlt /></span>
                <span>Login</span>
            </button>
            {showLoginPopup && (<LoginPopup setLoginPopup={(isOpen: boolean) => setLoginPopup(isOpen)} />)}
            <div className="flex absolute left-10 w-28 h-10 text-lg font-bold text-white justify-center items-center">
                <span className="cursor-pointer">Top Games</span>
            </div>
            <div className="flex absolute left-44 w-34 h-10 text-lg font-bold text-white justify-center items-center">
                <span className="cursor-pointer">Popular Games</span>
            </div>
        </div>
    )
}