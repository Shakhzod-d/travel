import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useScrollToTop} from '../../hooks/';
import { useState, useEffect } from 'react';

const ScrollButton = () => {
    const { scrollToTop } = useScrollToTop()
    const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button as soon as the user scrolls down
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
    return (
        <button onClick={scrollToTop} className={`p-4 rounded-full bg-white bottom-5 z-50 right-5 shadow-lg ${isVisible ? 'fixed' : 'hidden'}`}>
            <KeyboardArrowUpIcon className='text-black w-10 h-10'/>
        </button>
    )
}

export default ScrollButton