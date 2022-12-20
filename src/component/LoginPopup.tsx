import { useEffect, useRef } from "react"

export default function LoginPopup(props: any) {
    const ref = useRef<HTMLFormElement>(null);

    // if login form is not in focus, close the popup
    const dismissHandler = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target as Node)) {
            props.setLoginPopup(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", dismissHandler);
        return () => document.removeEventListener("mousedown", dismissHandler);
    });

    return (
        <form className="flex flex-col absolute right-10 top-14 w-80 h-60 z-10 p-2 rounded-2xl bg-black bg-opacity-80 justify-center"
            ref={ref}>
            <div className="flex flex-col relative w-full h-16 pl-2 pr-2 text-white">
                <span className="flex relative">Username</span>
                <input className="flex relative w-full h-full pl-3 rounded-2xl bg-white bg-opacity-50 focus:outline-none"></input>
            </div>
            <div className="flex flex-col relative w-full h-16 pl-2 pr-2 text-white">
                <span className="flex relative">Password</span>
                <input className="flex relative w-full h-full pl-3 rounded-2xl bg-white bg-opacity-50 focus:outline-none"></input>
            </div>
            <div className="flex relative w-full h-12 justify-center items-center">
                <div className="flex relative w-1/2 h-8 rounded-2xl text-white bg-white bg-opacity-50 justify-center items-center">Login</div>
            </div>
            <div className="flex flex-col relative w-full h-16 pl-2 pr-2 pb-2 items-center">
                <span className="flex relative text-white">Don't have an account?</span>
                <div className="flex relative w-3/4 h-full rounded-2xl text-white bg-white bg-opacity-50 items-center justify-center">Register</div>
            </div>
        </form>
    )
}