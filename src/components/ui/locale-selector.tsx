import React, { useRef, useEffect, useState } from "react"
import i18n from "../i18n/i18next"
import { twMerge } from "tailwind-merge"

type Prop = {
    className?: string
}

const LocaleSelector = ({ className }: Prop) => {
    let lastLn = localStorage.getItem('lng') 
    const [ln, setLn] = useState(lastLn ? lastLn : 'eng')
    const [show, setShow] = useState(false)
     const selectorRef = useRef<HTMLDivElement | null>(null);
    const handleLocale = (e: React.MouseEvent<HTMLButtonElement>) => {
        i18n.changeLanguage(e.currentTarget.value)
        localStorage.setItem('lng', i18n.language)
        setLn(e.currentTarget.value)
        setShow(false)
        window.location.reload()
    }
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (selectorRef.current && !selectorRef.current.contains(e.target as Node)) {
                setShow(false);  
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className={twMerge('outline-none bg-transparent text-white relative',  className)} ref={selectorRef}>
            <div onClick={() => setShow(true)} className="w-[50px] h-[30px] border-[1px] bg-white bg-opacity-25 border-gray-500 rounded-md flex justify-center items-center cursor-pointer">
                {ln}
            </div>
            <div className={`${show ? 'flex flex-col' : 'hidden'} border-[1px] border-gray-500 rounded-md absolute w-[50px] top-8`}>
                <button onClick={handleLocale} value={'eng'} className="hover:bg-black hover:bg-opacity-50 bg-white bg-opacity-25">eng</button>
                <button onClick={handleLocale} value={'ru'} className="hover:bg-black hover:bg-opacity-50 bg-white bg-opacity-25">ru</button>
                <button onClick={handleLocale} value={'uz'} className="hover:bg-black hover:bg-opacity-50 bg-white bg-opacity-25">uz</button>
            </div>
        </div>
    )
}

export default LocaleSelector