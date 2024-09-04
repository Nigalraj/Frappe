import axios from "axios";
import { Login } from "../constants/index";
import { BASEURL } from "../../Constant/ConstatntData";

export const LoginAction = (payload) => async (dispatch) => {
    dispatch({
        type: Login.LOADING,
        payload: { loading: true },
    });
    try {
        const { data } = await axios.post(`${BASEURL}auth/login`, payload);
        localStorage.setItem("Token", data?.access_token);
        await dispatch({
            type: Login.SUCCESS,
            payload: { loading: false, data: data },
        });
        window.location.href = "/dashboard";
        console.log("hiiiiiiiiii");
    } catch (err) {
        await dispatch({
            type: Login.ERROR,
            payload: { loading: false, data: {} },
        });
    }
};
