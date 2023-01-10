import { MouseEvent } from "react"

export default function Dropdown(props: any) {
    

    const onClick = (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) =>{ 
        const text = (event.target as Node).textContent
        props.selected(text)
        props.dropActive(false)
    }

    return(

        <div className="flex flex-col z-20 bottom-4 mb-14 absolute w-full h-48 overflow-auto bg-[#202123] shadow-2xl rounded-md scrollbar-hide">
            {props.list.map((item: string, index:number) => (
                <span key={index} className="flex items-center z-20 pl-2 w-full h-8 justify-left text-gray-100 hover:bg-secondary hover:text-accent hover:border-accent hover:border-2 rounded-md"
                    onClick={(e) => onClick(e)}                
                >
                {item}
                
                
                </span>
            ))}
            
            
        </div>
    )
}