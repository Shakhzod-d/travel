import { toast, TypeOptions  } from 'react-toastify';

const useNotify = () => {

    const toastify = (text: string, type: TypeOptions ) => {
        toast(text, {
            position: "top-right",
            type: type,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
        })
    } 
    return { toastify }
}

export default useNotify