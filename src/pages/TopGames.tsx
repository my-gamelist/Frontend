import { useState, useEffect } from "react"

import { AiOutlineLoading3Quarters } from "react-icons/ai"

import IGame from "../interface/game.interface";
import GameCard from "../component/GameCard";
import Pagination from "../component/Pagination";

export default function TopGames() {
    const [topGames, setTopGames] = useState<IGame[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`http://localhost:3000/api/game/top?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setTopGames(data);
            })
        
    }, [page])

    if (topGames.length === 0) {
        return (
            <div className="flex w-5/6 h-screen items-center justify-center bg-[#343541]">
                <AiOutlineLoading3Quarters className="animate-spin text-white text-5xl" />
            </div>
        )
    }

    return (
        <div className="flex flex-col w-5/6 h-screen max-h-screen overflow-y-auto relative bg-[#343541]">
            {/* side navbar */}
            {/* <Sidebar /> */}
            {/* main content */}
            {/* <div className="flex flex-col w-full h-full max-h-screen overflow-y-auto"> */}

                <h1 className="m-10 text-3xl text-gray-100">Top Games</h1>
                <div className="grid grid-cols-4 gap-6 pl-10 pr-10 pb-10">
                    {topGames.map((game: IGame) => (
                        <GameCard
                            key={game.appId}
                            appId={game.appId}
                            gameName={game.gameName}
                            releaseDate={game.releaseDate}
                            rating={game.rating}
                            numReview={game.numReview}
                            description={game.description}
                            developers={game.developers}
                            publishers={game.publishers}
                            steamRating={game.steamRating}
                            metacriticScore={game.metacriticScore}
                            steamReviews={game.steamReviews}
                            imageUrl={game.imageUrl}
                        />
                    ))}
                </div>
                <Pagination
                    page={page}
                    setPage={setPage} />
            </div>
        // </div>
    )
}