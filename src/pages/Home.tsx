import { useState } from "react"

import TopGames from "../component/TopGames"
import Login from "../component/Login";
import Sidebar from "../component/Sidebar";

export default function Home() {
    const [content, setContent] = useState<string>("home");

    return (
        <div className="flex w-screen h-screen relative">
            {/* side navbar */}
            <Sidebar
                setContent={setContent} />
            <div className="flex w-5/6 h-full max-h-screen overflow-y-auto bg-[#343541]">
                {content === "home" && <div className="flex w-full h-full max-h-screen"></div>}
                {content === "top" && <TopGames />}
                {content === "login" && <Login />}
            </div>
        </div>
    )
}