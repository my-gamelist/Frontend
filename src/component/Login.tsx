export default function Login() {
    return (
        <form className="relative flex flex-col w-full h-fit max-h-screen">
            <label className="flex relative text-gray-100 text-2xl font-bold mt-2 ml-2">Username</label>
            <input className="flex relative w-full h-10 mt-2 ml-2 pr-3 border-white border-2 rounded-2xl"></input>
            <label className="flex relative text-gray-100 text-2xl font-bold mt-2 ml-2">Password</label>
            <input className="flex relative w-full h-10 mt-2 ml-2 mr-3 border-white border-2 rounded-2xl"></input>
        </form>
    )
}