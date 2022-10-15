import { FaSignInAlt } from 'react-icons/fa'
import Searchbar from "./Searchbar"

export default function Navbar() {
    return (
        <div className="flex w-screen h-16 bg-white bg-opacity-30 justify-center items-center">
            <Searchbar />
            <div className="flex absolute cursor-pointer transition ease-in-out delay-10 right-10 w-28 h-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white justify-center items-center rounded-full">
                <span className="flex absolute left-3 text-white"><FaSignInAlt /></span>
                <span>Login</span>
            </div>
            <div className="flex absolute left-10 w-28 h-10 text-lg font-bold text-white justify-center items-center">
                <span className="cursor-pointer">Top Games</span>
            </div>
            <div className="flex absolute left-44 w-34 h-10 text-lg font-bold text-white justify-center items-center">
                <span className="cursor-pointer">Popular Games</span>
            </div>
        </div>
    )
}