import CircularProgress from '@mui/material/CircularProgress';

const Preloading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <CircularProgress 
            color="secondary"
            size={40}
        />
    </div>
  )
}

export default Preloading