import { setToken_Supporter } from "../../helpers/constans";
export default {
    supporterById: {},
    currentSupporter:{},
    ACCESS_TOKEN: localStorage.getItem(setToken_Supporter) || null
}