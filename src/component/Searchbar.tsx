import { FaSistrix } from 'react-icons/fa'

export default function Searchbar() {
    return (
        <div className="flex cursor-text transition ease-in-out delay-10 w-1/2 h-10 bg-primary border-2 border-gray-400 hover:bg-opacity-50 rounded-md items-center">
            <span className="flex relative left-4 text-white"><FaSistrix /></span>
        </div>
    )
}