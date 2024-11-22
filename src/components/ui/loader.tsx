import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <CircularProgress size={40}/>
    </div>
  )
}
export default Loading