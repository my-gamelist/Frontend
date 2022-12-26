import { MouseEvent } from "react";
import { FaGamepad, FaFire, FaPlus, FaHome, FaSignInAlt } from "react-icons/fa"

export default function Sidebar(props: any) {
    const { setContent } = props;

    const onClickTopGames = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setContent("top");
    }

    const onClickLogin = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setContent("login");
    }

    return (
        <div className="flex flex-col w-1/6 h-full p-3 max-h-screen overflow-y-auto text-gray-100 bg-[#202123]">
            <a href="/" className="flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-sky-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
                <FaHome />
                <span>Home</span>
            </a>
            <div className="flex w-full h-16"></div>
            <button className="flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500"
                onClick={e => onClickTopGames(e)}>
                <FaGamepad />
                <span>Top Games</span>
            </button>
            <a href="/popular" className="flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500">
                <FaFire />
                <span>Popular Games</span>
            </a>
            <a href="/new" className="flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500">
                <FaPlus />
                <span>New Games</span>
            </a>
            <div className="flex w-full h-96"></div>
            {/* <Login /> */}
            <button className="flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500"
                onClick={e => onClickLogin(e)}>
                <FaSignInAlt />
                <span>Login</span>
            </button>
        </div>
    )
}