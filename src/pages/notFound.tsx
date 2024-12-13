import { useTranslation } from "react-i18next"
import { Tabtitle } from "../hooks"

const NotFound = () => {
    const { t } = useTranslation()
    Tabtitle(t("notfound"))
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-4xl sm:text-3xl font-semibold text-red-600 capitalize">{t("notfound")}</h1>
        </div>
    )
}

export default NotFound