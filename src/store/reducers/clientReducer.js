﻿import {SET_THEME, SET_USER, SET_LANGUAGE, SET_ROLES} from "../actions/clientActions.js";

const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: ""
}

export const ClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload};
        case SET_ROLES:
            return {...state, roles: action.payload};
        case SET_THEME:
            return {...state, theme: action.payload};
        case SET_LANGUAGE:
            return {...state, language: action.payload};

        default:
            return state;
    }
};

