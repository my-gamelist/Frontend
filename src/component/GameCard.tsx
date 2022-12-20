import { FaSteam } from "react-icons/fa";
import IGame from "../interface/game.interface";

export default function GameCard(props: IGame) {
    return (
        <div className="flex flex-col relative w-full h-80">
            <img alt="Game" className="flex w-full h-auto rounded-t-xl" src={props.imageUrl}></img>
            <div className="flex flex-col relative w-full h-full rounded-b-xl bg-[#202123]">
                <span className="flex relative text-gray-100 text-2xl font-bold mt-2 ml-2">{props.gameName}</span>
                {/* <span className="flex relative text-gray-100 text-6xl font-bold mt-2 ml-2">{props.rating}</span> */}
                {/* <span className="overflow-y-scroll flex relative text-gray-100 font-bold mt-2 ml-2">{props.description}</span> */}
                <div className="flex relative w-fit mt-2 ml-2 pr-1 space-x-1 border-white border-2 rounded-2xl">
                    <FaSteam className="flex relative text-gray-100 text-2xl"/>
                    <span className="flex relative text-gray-100 font-bold">{props.steamRating}</span>
                </div>
            </div>
        </div>
        
    )
}