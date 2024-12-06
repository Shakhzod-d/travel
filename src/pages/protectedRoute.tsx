import { Outlet, Navigate, useParams } from 'react-router-dom'
import { useFetchTravelData } from '../hooks'
import { useQuery } from 'react-query'
import { TravelType } from '../types'
import { Loading } from '../components/ui'

const ProtectedRoute = () => {

    const { fetchTraveldata } = useFetchTravelData()
    const { id } = useParams()
    const { data, isLoading, error } = useQuery({
        queryKey: ['params'],
        queryFn: fetchTraveldata
    })

    let slugs = data?.results?.map((item: TravelType) => item.slug)
    let fake = slugs?.find((item: string) => item === id)

    if(isLoading) return <Loading/>
    if(error instanceof Error) return <div>Error: {error.message}</div>


    return fake !== undefined ? <Outlet/> : <Navigate to='/tours'/>
}

export default ProtectedRoute