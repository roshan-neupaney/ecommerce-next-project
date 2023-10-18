import { BASE_URL } from "../../components/utilites/constant";
import axios from "axios";

export const ServerSideGet = async (url) => {
    try{
        return await axios.get(BASE_URL + '/' + url).then((res)=> {
            return res;
        })
    } catch (error) {
        return error.response;
    }
}