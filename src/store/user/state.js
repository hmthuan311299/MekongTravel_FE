import { setToken } from "../../helpers/constans";
export default {
    currentMember:{},
    ACCESS_TOKEN: localStorage.getItem(setToken) || null
}