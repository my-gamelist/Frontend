import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"

export default function Home() {
    return (
        <div className="flex w-full h-full">
            <Sidebar />
            <div className="flex w-5/6 h-screen bg-[#141616]">
                <Navbar />
            </div>
        </div>
        
    )
}