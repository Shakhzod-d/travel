import CircularProgress from '@mui/material/CircularProgress';
import { twMerge } from "tailwind-merge";

const Loading = ({ className }: { className?: string}) => {
  return (
    <div className={twMerge('w-full h-screen flex justify-center items-center', className)}>
      <CircularProgress size={40}/>
    </div>
  )
}
export default Loading