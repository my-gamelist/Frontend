import { useState, useEffect } from "react"

import { AiOutlineLoading3Quarters } from "react-icons/ai"

import IGame from "../interface/game.interface";
import GameCard from "./GameCard";
import Pagination from "./Pagination";

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
            <div className="flex w-full h-full items-center justify-center">
                <AiOutlineLoading3Quarters className="animate-spin text-white text-5xl" />
            </div>
        )
    }

    return (
        <div className="w-full h-full max-h-screen">
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
    )
}