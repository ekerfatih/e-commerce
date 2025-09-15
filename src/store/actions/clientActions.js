import axios from "axios";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => ({type: SET_USER, payload: user});
export const setRoles = (roles) => ({type: SET_ROLES, payload: roles});
export const setTheme = (theme) => ({type: SET_THEME, payload: theme});
export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language});

export const getRoles = () => async dispatch => {
    try {
        const res = await axios.get(BASE_URL + "/roles");
        dispatch({type: SET_ROLES, payload: res.data});
    } catch (err) {
        console.error(err);
    }
};

export const login = (creds, remember) => async (dispatch) => {
    try {
        const {data} = await axios.post(BASE_URL + "/login", creds);
        dispatch({type: SET_USER, payload: data});
        if (remember && data.token) localStorage.setItem("token", data.token);
        return {success: true};
    } catch (err) {
        const message = err?.response?.data?.message || "Giriş başarısız oldu";
        return {success: false, message};
    }
};


export const verify = () => async dispatch => {
    const token = localStorage.getItem("token");
    if (token == null) return;
    axios.get(BASE_URL + "/verify", {
        headers: {
            Authorization: `${token}`
        }
    })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            dispatch({type: SET_USER, payload: res.data});
            return true;
        })
        .catch(err => {
            dispatch({type: SET_USER, payload: null});
            localStorage.removeItem("token");
            console.error(err);
            return false;
        })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({type: SET_USER, payload: null});
};