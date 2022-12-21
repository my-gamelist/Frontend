import { useEffect, useState } from 'react'

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import IPage from '../interface/page.interface';

export default function Pagination(props: IPage) {
    const { page, setPage } = props;

    const [totalGames, setTotalGames] = useState<number>(0);
    const [pageSearchClicked, setPageSearchClicked] = useState<boolean>(false);

    const totalPages = Math.ceil(totalGames / 20);

    useEffect(() => {
        fetch("http://localhost:3000/api/game/total")
            .then(res => res.json())
            .then(data => {
                setTotalGames(data);
            })
    }, [])

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handlePage = (newPage: number) => {
        setPage(newPage);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPage = parseInt(e.target.value);
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
            setPageSearchClicked(false);
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }

        if (e.key === "Enter") {
            const newPage = parseInt(e.currentTarget.value);
            if (newPage > 0 && newPage <= totalPages) {
                setPage(newPage);
                setPageSearchClicked(false);
            }
        }
    }

    const handleIconClick = () => {
        setPageSearchClicked(true);
    }

    const tailwindColor = (currentPage: number) => {
        if (currentPage === page) {
            return "transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-sky-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100";
        } else {
            return "bg-slate-500 transition duration-150 hover:bg-slate-600";
        }
    }

    return (
        <div className="w-full h-20">
            <div className="flex w-full h-full space-x-5 items-center justify-center">
                <BsArrowLeft className="flex w-10 h-10 p-2 text-gray-100 rounded-md cursor-pointer transition hover:bg-slate-500 duration-150"
                    onClick={() => handlePrevPage()} />
                
                {page < 5 && (
                    <div className="flex flex-row space-x-2">
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(1)}`}
                            onClick={() => handlePage(1)}>{1}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(2)}`}
                            onClick={() => handlePage(2)}>{2}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(3)}`}
                            onClick={() => handlePage(3)}>{3}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(4)}`}
                            onClick={() => handlePage(4)}>{4}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(5)}`}
                            onClick={() => handlePage(5)}>{5}</button>
                        {pageSearchClicked ? (
                            <input className={`flex w-10 h-10 text-xl text-gray-100 rounded-md text-center bg-slate-500 focus:outline-none`}
                                onKeyDown={e => handleKeyPress(e)}
                                onBlur={e => handleInput(e)}></input>
                        ) : (
                            <BiDotsHorizontalRounded className={`flex w-10 h-10 p-2 text-gray-100 rounded-md items-center justify-center transition duration-150 hover:bg-slate-600`}
                                onClick={() => handleIconClick()} />
                        )}
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(totalPages)}`}
                            onClick={() => handlePage(totalPages)}>{totalPages}</button>
                    </div>
                )}
                {page >= 5 && page <= totalPages - 4 && (
                    <div className="flex flex-row space-x-2">
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(1)}`}
                            onClick={() => handlePage(1)}>{1}</button>
                        {pageSearchClicked ? (
                            <input className={`flex w-10 h-10 text-xl text-gray-100 rounded-md text-center bg-slate-500 focus:outline-none`}
                                onKeyDown={e => handleKeyPress(e)}
                                onBlur={e => handleInput(e)}></input>
                        ) : (
                            <BiDotsHorizontalRounded className={`flex w-10 h-10 p-2 text-gray-100 rounded-md items-center justify-center transition duration-150 hover:bg-slate-600`}
                                onClick={() => setPageSearchClicked(true)} />
                        )}
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(page-2)}`}
                            onClick={() => handlePage(page-2)}>{page - 2}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(page-1)}`}
                            onClick={() => handlePage(page-1)}>{page - 1}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(page)}`}>{page}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(page+1)}`}
                            onClick={() => handlePage(page+1)}>{page + 1}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(page+2)}`}
                            onClick={() => handlePage(page+2)}>{page + 2}</button>
                        {pageSearchClicked ? (
                            <input className={`flex w-10 h-10 text-xl text-gray-100 rounded-md text-center bg-slate-500 focus:outline-none`}
                                onKeyDown={e => handleKeyPress(e)}
                                onBlur={e => handleInput(e)}></input>
                        ) : (
                            <BiDotsHorizontalRounded className={`flex w-10 h-10 p-2 text-gray-100 rounded-md items-center justify-center transition duration-150 hover:bg-slate-600`}
                                onClick={() => setPageSearchClicked(true)} />
                        )}
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(totalPages)}`}
                            onClick={() => handlePage(totalPages)}>{totalPages}</button>
                    </div>
                )}
                {page > totalPages - 4 && (
                    <div className="flex flex-row space-x-2">
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(1)}`}
                            onClick={() => handlePage(1)}>{1}</button>
                        {pageSearchClicked ? (
                            <input className={`flex w-10 h-10 text-xl text-gray-100 rounded-md text-center bg-slate-500 focus:outline-none`}
                                onKeyDown={e => handleKeyPress(e)}
                                onBlur={e => handleInput(e)}></input>
                        ) : (
                            <BiDotsHorizontalRounded className={`flex w-10 h-10 p-2 text-gray-100 rounded-md items-center justify-center transition duration-150 hover:bg-slate-600`}
                                onClick={() => setPageSearchClicked(true)} />
                        )}
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(totalPages-3)}`}
                            onClick={() => handlePage(totalPages-3)}>{totalPages-3}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(totalPages-2)}`}
                            onClick={() => handlePage(totalPages-2)}>{totalPages-2}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(totalPages-1)}`}
                            onClick={() => handlePage(totalPages-1)}>{totalPages-1}</button>
                        <button className={`flex w-10 h-10 text-xl text-gray-100 rounded-md items-center justify-center ${tailwindColor(totalPages)}`}
                            onClick={() => handlePage(totalPages)}>{totalPages}</button>
                    </div>
                )}

                <BsArrowRight className="flex w-10 h-10 p-2 text-gray-100 rounded-md cursor-pointer transition hover:bg-slate-500 duration-150"
                    onClick={() => handleNextPage()} />
            </div>
        </div>
    )
}