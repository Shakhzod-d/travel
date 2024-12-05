import React, { useRef, useEffect, useState } from "react"
import i18n from "../i18n/i18next"
import { twMerge } from "tailwind-merge"
import uzb from '../../assets/icons/flags/uzb.png'
import eng from '../../assets/icons/flags/united-kingdom.png'
import ru from '../../assets/icons/flags/russia.png'

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
            <div onClick={() => setShow(true)} className="w-[65px] h-[30px] px-[2px] border-[1px] bg-white bg-opacity-25 border-gray-500 rounded-md flex justify-evenly items-center cursor-pointer">
                <span className="capitalize mr-1">{ln}</span>
                <img src={ln === 'uz' ? uzb : ln === 'eng' ? eng : ru} alt="flag" className="w-[20px] h-[20px] rounded-md"/>
            </div>
            <div className={`${show ? 'flex flex-col' : 'hidden'} border-[1px] border-gray-500 rounded-md absolute z-50 w-[65px] top-8`}>
                <button onClick={handleLocale} value={'eng'} className="hover:bg-black hover:bg-opacity-50 bg-white bg-opacity-25 w-full flex items-center pl-2">
                    <span className="mr-3 text-center text-sm">En</span>
                    <img src={eng} alt="eng" className="w-[15px] h-[15px] rounded-md"/>
                </button>
                <button onClick={handleLocale} value={'ru'} className="hover:bg-black hover:bg-opacity-50 bg-white bg-opacity-25 w-full flex items-center pl-2">
                    <span className="text-center mr-[12px] text-sm">Ru</span>
                    <img src={ru} alt="ru" className="w-[15px] h-[15px] rounded-md"/>
                </button>
                <button onClick={handleLocale} value={'uz'} className="hover:bg-black hover:bg-opacity-50 bg-white bg-opacity-25 w-full flex items-center pl-2">
                    <span className="mr-3 text-center text-sm">Uz</span>
                    <img src={uzb} alt="uz" className="w-[15px] h-[15px] pointer-events-none rounded-md"/>
                </button>
            </div>
        </div>
    )
}

export default LocaleSelector