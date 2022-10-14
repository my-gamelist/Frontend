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
                <div className="w-1/2 ml-10 mt-10 mr-10">
                    <div className="w-full h-1/2 p-10">
                        <img className="flex relative w-full h-full rounded-2xl" src="https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427"></img>
                    </div>
                    <div className="w-full h-1/2 p-10">
                        <div className="flex flex-col relative w-full h-full text-white bg-white bg-opacity-30 rounded-2xl">
                            <div className="flex relative w-full h-10 border-b-2 border-white justify-center items-center">
                                <span className="flex absolute left-4 text-lg font-bold">Summary</span>
                            </div>
                            <div className="flex p-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam ligula nulla, ornare et faucibus in, finibus at nibh.
                                Curabitur tempor fringilla tempor. Nunc est urna,
                                suscipit vel urna ut, sodales convallis dui.
                                Vivamus pulvinar, dolor in elementum ultricies,
                                augue felis porttitor turpis, nec molestie ex felis et lorem.
                                Donec vitae leo nec mauris placerat fringilla.
                                Donec semper tempor lorem, sit amet fringilla neque fermentum nec.
                                Phasellus fermentum pretium mollis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 ml-10 mt-10 mr-10 bg-yellow-600">

                </div>
            </div>
        </div>
    )

    // const res = getGameDetail(params['gameId'])
    //     .then((data) => {
    //         setGame(data)
    //     });
}