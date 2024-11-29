import { ChangeEvent, useState } from "react"
import i18n from "../i18n/i18next"

const LocaleSelector = () => {
    let lastLn = localStorage.getItem('lng') 
    const [ln, setLn] = useState(lastLn ? lastLn : 'eng')
    const handleLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
        localStorage.setItem('lng', i18n.language)
        setLn(e.target.value)
        window.location.reload()
    }
    return (
        <select 
            name="locale" 
            id="localeswitch"
            value={ln}
            onChange={handleLocale}
            className="outline-none bg-transparent text-white"
        >
            <option value="eng" className="text-black">
                Eng
            </option>
            <option value="uz" className="text-black">
                Uz
            </option>
            <option value="ru" className="text-black flex">
                Ru
            </option>
        </select>
    )
}

export default LocaleSelector