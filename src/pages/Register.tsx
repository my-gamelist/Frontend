import React from "react"
import Navbar from "../component/Navbar"

export default function Register() {
    return (
        <div className="h-screen bg-slate-700">
            <Navbar />
            <div className = "flex w-full h-full bg-blue justify-center items-center p-20">
                <div className = "flex flex-row w-5/6 h-full bg-white-400">
                    
                    <div className = "flex flex-col basis-3/5 w-full h-full bg-white bg-opacity-30 rounded-l-2xl">

                        {/* First Row */}
                        <div className = "flex flex-row basis-1/5 w-full h-full"> 
                           
                            <div className = "flex flex-col basis-1/2 w-full h-full p-6 space-y-3">
                                <span className = "flex text-xl text-white">First Name</span>
                                <div className = "flex w-full h-3/6 bg-white rounded-2xl"></div>

                            </div>
                            <div className = "flex flex-col basis-1/2 w-full h-full p-6 space-y-3">
                                <span className = "flex text-xl text-white">Last Name</span>
                                <div className = "flex w-full h-3/6 bg-white rounded-2xl"></div>
                            </div>
                            
                        </div>

                        <div className = "flex flex-col basis-1/5 w-full h-full p-6 space-y-3"> 
                            <span className = "flex text-xl text-white">Email Name</span>
                            <div className = "flex w-full h-3/6 bg-white rounded-2xl"></div>
                        
                        </div>

                        <div className = "flex flex-col basis-1/5 w-full h-full p-6 space-y-3"> 
                            <span className = "flex text-xl text-white">Username</span>
                            <div className = "flex w-full h-3/6 bg-white rounded-2xl"></div>
                        
                        </div>
                        <div className = "flex flex-col basis-1/5 w-full h-full p-6 space-y-3"> 
                            <span className = "flex text-xl text-white">Password</span>
                            <div className = "flex w-full h-3/6 bg-white rounded-2xl"></div>
                        
                        </div>
                        <div className = "flex flex-col basis-1/5 w-full h-full  p-6 space-y-3"> 
                            <span className = "flex text-xl text-white">Confirm Password</span>
                            <div className = "flex w-full h-3/6 bg-white rounded-2xl"></div>
                        
                        </div>
                    </div>

                    <div className = "flex basis-2/5 w-full h-full bg-white bg-opacity-40 rounded-r-2xl">

                    </div>


                </div> 
            </div>
        </div>
    )
}