import { NavLink } from "react-router-dom";
import {FiHome} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"
import {TbDeviceGamepad2} from 'react-icons/tb'
import {RiFileList2Line} from   'react-icons/ri'
import {BsPeople} from 'react-icons/bs'
export default function Sidebar() {
    return (
        <div className="flex flex-col w-1/6 h-screen p-2 max-h-screen overflow-y-auto text-[#DBDBDB] bg-[#181A1B]">

            <NavLink to="/" className="flex w-full h-16 text-3xl space-x-4 items-center justify-center">
                <GiHamburgerMenu className="flex top-0.5 relative"/>
                <span className="font-bold text-accent">GamePage</span>
            </NavLink>
            <NavLink to="/" className="flex mt-3 w-full h-12 pl-9 text-2xl space-x-2 items-center rounded-md transition duration-100 hover:bg-accent hover:text-primary">
                <FiHome className="text-3xl"/>
                <span className="font-bold">Home</span>
            </NavLink>

            <div className="flex w-full mt-4 h-8 pl-9 text-2xl space-x-2 items-center">
                <TbDeviceGamepad2 className="text-3xl"/>
                <span className="font-bold">Games</span>
            </div>

            <NavLink to='/top' className='flex w-full mt-2 h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Top Games</span>
            </NavLink>
            <NavLink to='/popular' className='flex w-full h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Popular Games</span>
            </NavLink>
            <NavLink to='/new' className='flex w-full h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">New Games</span>
            </NavLink>
            <NavLink to='/upcoming' className='flex w-full h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Top Games</span>
            </NavLink>

            <div className="flex w-full mt-4 h-8 pl-9 text-2xl space-x-2 items-center">
                <RiFileList2Line className="text-3xl"/>
                <span className="font-bold">Lists</span>
            </div>

            <NavLink to='/yourlist' className='flex w-full mt-2 h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Your Games</span>
            </NavLink>
            <NavLink to='/wishlist' className='flex w-full h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Your Wishlist</span>
            </NavLink>
            
            <div className="flex w-full mt-4 h-8 pl-9 text-2xl space-x-2 items-center">
                <BsPeople className="text-3xl"/>
                <span className="font-bold">Community</span>
            </div>


            <NavLink to='/profile/follower' className='flex mt-2 w-full h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Your Followers</span>
            </NavLink>
            <NavLink to='/profile/friends' className='flex w-full h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Your Following</span>
            </NavLink>
            <NavLink to='/groups' className='flex w-full h-10 pl-14 text-xl items-center transition duration-100 rounded-md hover:bg-accent hover:text-primary'>
                <span className="font-semibold">Groups</span>
            </NavLink>
            

        </div>
    )
}