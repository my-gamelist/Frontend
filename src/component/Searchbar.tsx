import { FaSistrix } from 'react-icons/fa'

export default function Searchbar() {
    return (
        <div className="flex transition ease-in-out delay-10 w-1/2 h-10 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full items-center">
            <span className="flex relative left-4 text-white"><FaSistrix /></span>
        </div>
    )
}