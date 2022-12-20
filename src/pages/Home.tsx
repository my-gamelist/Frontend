import { MouseEvent, useState } from "react"
import { FaGamepad, FaFire, FaPlus, FaHome, FaSignInAlt } from "react-icons/fa"

import TopGames from "../component/TopGames"
import Login from "../component/Login";

export default function Home() {
    const [isTopGames, setIsTopGames] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const onClickTopGames = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setIsTopGames(true);
    }

    const onClickLogin = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setIsLogin(true);
    }

    return (
        <div className="flex w-screen h-screen relative">
            {/* side navbar */}
            <div className="flex flex-col w-1/6 h-full p-3 max-h-screen overflow-y-auto text-gray-100 bg-[#202123]">
                <a href="/" className="transition-all flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md duration-500 bg-gradient-to-tl from-indigo-500 via-red-600 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
                    <FaHome />
                    <span>Home</span>
                </a>
                <div className="flex w-full h-16"></div>
                <button className="transition delay-30 flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500"
                    onClick={e => onClickTopGames(e)}>
                    <FaGamepad />
                    <span>Top Games</span>
                </button>
                <a href="/popular" className="transition delay-30 flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500">
                    <FaFire />
                    <span>Popular Games</span>
                </a>
                <a href="/new" className="transition delay-30 flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500">
                    <FaPlus />
                    <span>New Games</span>
                </a>
                <div className="flex w-full h-96"></div>
                {/* <Login /> */}
                <button className="transition delay-30 flex w-full h-16 pl-2 text-2xl space-x-2 items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500"
                    onClick={e => onClickLogin(e)}>
                    <FaSignInAlt />
                    <span>Login</span>
                </button>
            </div>
            <div className="flex w-5/6 h-full max-h-screen overflow-y-auto bg-[#343541]">
                {isTopGames ? <TopGames /> : <div className="flex w-full h-full"></div>}
            </div>
        </div>
    )
}