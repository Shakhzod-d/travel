import { TravelStyles } from "../../types"
import { Container, Loading } from "../ui"
import { useFetchData, useScrollToTop } from "../../hooks"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { handleCategory } from "../../store/main-slice"
import { useTranslation } from "react-i18next"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Travelstyle = () => {
    const { scrollToTop } = useScrollToTop()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { fetchdata } = useFetchData('/api/tour/v1/categories')
    const { data, isLoading, error } = useQuery({
        queryKey: ['styles'],
        queryFn: fetchdata
    })
    return (
        <div className="w-full flex justify-center">
            <Container className="flex flex-col items-center py-3 box">
                <h2 className="chaptertitle md:text-3xl sm:text-2xl mb-8">{t("styles")}</h2>
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-5 sm:w-full">
                        {
                            isLoading ? (
                                <Loading/>
                            ) : error instanceof Error ? (
                                <div>Error: {error.message}</div>
                            ) :
                            data?.results?.map((item: TravelStyles) => (
                                <Link key={item.id} to={'/tours'} onClick={scrollToTop}>
                                    <button
                                        onClick={() => {
                                            dispatch(handleCategory(item.title))
                                        }}
                                        style={{ backgroundImage: `url(${item.image})` }} 
                                        className="bg-cover bg-center bg-no-repeat flex flex-col mr-5 mb-5 lg:mr-0 xl:even:mr-0 justify-between p-4 rounded-3xl h-[280px] w-[450px] lg:w-[350px] md:w-[250px] sm:w-full">
                                        <div className="flex flex-col items-start text-start">
                                            <h3 className="h3 styleTitle text-[40px] md:text-[24px] font-[700] uppercase mb-2">{item.title}</h3>
                                            <h4 className="h4 text-gray-300">{item.sub_title}</h4>
                                        </div>
                                        <div className="flex text-[#F56960] items-center">
                                            <h4 className="h4 w-max capitalize text-[#F56960]">{t("learn")}</h4>
                                            <KeyboardArrowRightIcon style={{ fontSize: '30px' }}/>
                                        </div>
                                    </button>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Travelstyle