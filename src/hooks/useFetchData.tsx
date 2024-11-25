import axios from "axios";
import { Base_URL } from "../api";
import { useToastify } from ".";
import { axiosInstance } from "../api/Base_URL";

const useFetchData = (url: string) => {
  let test = url[0] !== "/";
  const { toastify } = useToastify();

  const fetchdata = async () => {
    try {
      const req = await axiosInstance.get(
        `${Base_URL}${test ? "/" : ""}${url}`
      );
      return req.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastify(error.message, "error");
      } else {
        toastify("An unknown error occurred", "error");
      }
    }
  };
  return { fetchdata };
};

export default useFetchData;
