import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IGame from "../interface/game.interface";
import Navbar from "../component/Navbar";

export default function Game() {
    const [game, setGame] = useState<IGame>();
    const params = useParams();
    const gameId = params['gameId'];
    const url = process.env.REACT_APP_HOST_URL + `/game/${gameId}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(setGame)
    },[])
    
    console.log(game);

    return (
        <div className="h-full bg-blue">
            <Navbar />
            <div className="flex flex-row w-full h-screen">
                {/* This div is for game image and description */}
                <div className="w-1/2 ml-10 mr-10">
                    <div className="w-full h-1/2 p-10">
                        <img className="flex relative w-full h-full rounded-2xl" src="https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427"></img>
                    </div>
                    <div className="w-full h-1/2 pl-10 pr-10 pb-10">
                        <div className="flex flex-col relative w-full h-full text-white bg-white bg-opacity-30 rounded-2xl">
                            <div className="flex relative w-full h-14 border-b-2 border-white justify-center items-center">
                                <span className="flex absolute left-4 text-lg font-bold">Summary</span>
                            </div>
                            <div className="flex overflow-auto p-4">
                                {game?.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 mt-10 mr-10">
                    {/* Game Title */}
                    <div className="flex relative w-full h-14 bg-white bg-opacity-30 rounded-2xl">
                        <span className="absolute left-4 text-white text-5xl font-bold">{game?.gameName}</span>
                    </div>
                    {/* panels */}
                    <div className="flex flex-row space-x-4 w-full h-24 mt-6">
                        {/* Rating panel */}
                        <div className="flex flex-col relative w-1/5 h-full rounded-2xl bg-white bg-opacity-30 items-center">
                            <span className="flex relative text-white">Rating</span>
                            <span className="flex relative text-white text-6xl font-bold">8.6</span>
                        </div>
                        {/* Ranking panel */}
                        <div className="flex flex-col relative w-1/5 h-full rounded-2xl bg-white bg-opacity-30 items-center">
                            <span className="flex relative text-white">Ranking</span>
                            <span className="flex relative text-white text-6xl font-bold">18</span>
                        </div>
                        {/* Popularity number panel */}
                        <div className="flex flex-col relative w-1/5 h-full rounded-2xl bg-white bg-opacity-30 items-center">
                            <span className="flex relative text-white">Popularity</span>
                            <span className="flex relative text-white text-6xl font-bold">71</span>
                        </div>
                        {/* Member panel */}
                        <div className="flex flex-col relative w-2/5 h-full rounded-2xl bg-white bg-opacity-30 items-center">
                            <span className="flex relative text-white">Members</span>
                            <span className="flex relative text-white text-6xl font-bold">284713</span>
                        </div>
                    </div>
                    {/* Additional information panel */}
                    <div className="flex flex-col space-y-2 relative w-full h-44 mt-6 text-white text-lg bg-white bg-opacity-30 rounded-2xl justify-center">
                        {/* App id */}
                        <div className="flex flex-row relative w-full h-8 pl-10 pr-10">
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-l-2xl border-r-2 border-l-white border-opacity-30 justify-center items-center">App ID</span>
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-r-2xl justify-center items-center">{game?.appId}</span>
                        </div>
                        <div className="flex flex-row relative w-full h-8 pl-10 pr-10">
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-l-2xl border-r-2 border-l-white border-opacity-30 justify-center items-center">Release Date</span>
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-r-2xl justify-center items-center">12/29/2022</span>
                        </div>
                        <div className="flex flex-row relative w-full h-8 pl-10 pr-10">
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-l-2xl border-r-2 border-l-white border-opacity-30 justify-center items-center">Developers</span>
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-r-2xl justify-center items-center">{game?.developers}</span>
                        </div>
                        <div className="flex flex-row relative w-full h-8 pl-10 pr-10">
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-l-2xl border-r-2 border-l-white border-opacity-30 justify-center items-center">Publishers</span>
                            <span className="flex relative w-1/2 h-full bg-white bg-opacity-50 rounded-r-2xl justify-center items-center">{game?.publishers}</span>
                        </div>
                    </div>
                    {/* User reviews title */}
                    <div className="flex relative w-full h-14 mt-6 bg-white bg-opacity-30 rounded-t-2xl items-center">
                        <span className="flex relative left-4 text-white text-3xl font-bold">User Reviews</span>
                    </div>
                    {/* User reviews list */}
                    <div className="flex flex-col overflow-auto relative w-full h-64 text-white bg-white bg-opacity-30 rounded-b-2xl">
                        <div className="flex flex-row relative w-full h-full p-5">
                            <div className="flex flex-col space-y-8 relative w-1/4 h-full bg-white bg-opacity-50 rounded-l-2xl justify-center items-center">
                                <span>User</span>
                                <span>Review date</span>
                                <span>User rating</span>
                                <span>Open Review</span>
                            </div>
                            <div className="flex relative w-3/4 h-full p-4 bg-white bg-opacity-20 rounded-r-2xl border-l-2 border-l-white border-opacity-30 justify-center items-center">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam ligula nulla, ornare et faucibus in, finibus at nibh.
                                    Curabitur tempor fringilla tempor. Nunc est urna,
                                    suscipit vel urna ut, sodales convallis dui.
                                    Vivamus pulvinar, dolor in elementum ultricies,
                                    augue felis porttitor turpis, nec molestie ex felis et lorem.
                                    Donec vitae leo nec mauris placerat fringilla.
                                    Donec semper tempor lorem, sit amet fringilla neque fermentum nec.
                                    Phasellus fermentum pretium mollis.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row relative w-full h-full p-5">
                            <div className="flex flex-col space-y-8 relative w-1/4 h-full bg-white bg-opacity-50 rounded-l-2xl justify-center items-center">
                                <span>User</span>
                                <span>Review date</span>
                                <span>User rating</span>
                                <span>Open Review</span>
                            </div>
                            <div className="flex relative w-3/4 h-full p-4 bg-white bg-opacity-20 rounded-r-2xl border-l-2 border-l-white border-opacity-30 justify-center items-center">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam ligula nulla, ornare et faucibus in, finibus at nibh.
                                    Curabitur tempor fringilla tempor. Nunc est urna,
                                    suscipit vel urna ut, sodales convallis dui.
                                    Vivamus pulvinar, dolor in elementum ultricies,
                                    augue felis porttitor turpis, nec molestie ex felis et lorem.
                                    Donec vitae leo nec mauris placerat fringilla.
                                    Donec semper tempor lorem, sit amet fringilla neque fermentum nec.
                                    Phasellus fermentum pretium mollis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}