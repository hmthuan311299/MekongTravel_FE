import { setToken_Admin } from "../../helpers/constans";
export default {
    admin:{},
    ACCESS_TOKEN: localStorage.getItem(setToken_Admin) || null
}