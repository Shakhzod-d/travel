import { useTranslation } from "react-i18next"

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-4xl sm:text-3xl font-semibold text-red-600 capitalize">{t("notfound")}</h1>
        </div>
    )
}

export default NotFound