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
        const { data } = await axios.post(BASE_URL + "/login", creds);
        dispatch({ type: SET_USER, payload: data });
        if (remember && data.token) localStorage.setItem("token", data.token);
        const payload = { name: data.name, email: data.email, role_id: data.role_id };
        localStorage.setItem("user", JSON.stringify(payload));
        return { success: true, payload };
    } catch (err) {
        const message = err?.response?.data?.message || "Giriş başarısız oldu";
        return { success: false, message };
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: SET_USER, payload: null });
};