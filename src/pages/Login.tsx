export default function Login() {
    return (
        // <div className="w-full h-full max-h-screen items-center">
        //     <span className="mt-24 text-6xl text-gray-100">Login</span>
        //     <div className="relative z-0 px-2 w-full group">
        //         <label htmlFor="first_name"
        //         className="w-fit transition-all duration-300 bg-[#202123] text-gray-100 relative px-1 group-focus-within:top-2 top-7 left-3 group-focus-within:text-red-600 ">
        //         Email Address 
        //         </label>
        //         <input type="email" name="first_name" id="first_name"
        //             className="w-1/3 h-8 p-2.5 text-[11px]text-10 py-55-rem bg-[#202123] text-gray-100 rounded-lg focus:outline-none"
        //         />
        //     </div>
        // </div>

        // <div className="flex flex-col w-full h-full max-h-screen items-center">
        //     <span className="flex mt-24 text-6xl text-gray-100">Login</span>
        //     <div className="flex flex-col group w-1/3 h-96 mt-10">
        //         <label htmlFor="first_name"
        //             className="flex absolute w-fit h-10 items-center bg-red-700">Username</label>
        //         <input type="email" name="first_name" id="first_name"
        //             className="flex w-full h-10 p-2.5 text-gray-100 bg-[#202123] focus:outline-none"
        //         />
        //     </div>
        // </div>

        <div className="flex flex-col w-5/6 h-screen max-h-screen overflow-y-auto relative items-center bg-[#343541]">
            <span className="flex mt-24 text-6xl text-gray-100">Login</span>
            <form className="flex flex-col relative w-1/3 mt-10 space-y-5">
                <div className="flex relative w-full">
                    <input type="text" id="username" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-sky-500 peer" placeholder=" " />
                    <label htmlFor="username" className="absolute text-sm pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Username</label>
                </div>
                <div className="flex relative w-full">
                    <input type="password" id="password" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-100 bg-[#202123] appearance-none focus:border-2 focus:outline-none focus:border-sky-500 peer" placeholder=" " />
                    <label htmlFor="password" className="absolute text-sm pl-2 text-gray-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">Password</label>
                </div>
                <button type="submit" className="flex w-full h-14 text-xl text-gray-100 rounded-md items-center justify-center transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-sky-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">Login</button>
            </form>
            <p className="flex text-gray-100 mt-10">Don't have an account?
            <span className="flex text-sky-500 ml-2 cursor-pointer hover:underline">Register here</span></p>
        </div>
    )
}