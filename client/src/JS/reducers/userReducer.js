import {GET_ONE_USER_SUCCESS,GET_ONE_USER_FAIL, GET_All_USERS_SUCCESS,GET_All_USERS_FAIL,USER_SIGNUP_LOADING, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAIL, LOGOUT_USER } from "../actionsTypes/constantsUser"

const initialState = {
    loading: false,
    usersList: [],
    errors: null,
    currentUser: {},
    userEdit:{}
}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SIGNUP_LOADING:
            return ({ ...state, loading: true })
            case GET_All_USERS_SUCCESS:
                return { ...state, usersList: payload, loading: false }
            case GET_All_USERS_FAIL:
                return { ...state, errors: payload, loading: false }
        case USER_SIGNUP_SUCCESS:
            return ({ ...state, loading: false })
        case USER_SIGNUP_FAIL:
            return ({ ...state, loading: false, errors: payload })
        case USER_SIGNIN_SUCCESS:
            localStorage.setItem("token", payload.token)
            return ({ ...state, currentUser: payload.user, loading: false })
        case USER_SIGNIN_FAIL:
            return ({ ...state, loading: false, errors: payload })
        case GET_CURRENT_USER_SUCCESS:
            return ({ ...state, currentUser: payload, loading: false })
        case GET_CURRENT_USER_FAIL:
            return ({ ...state, loading: false, errors: payload })
            case GET_ONE_USER_SUCCESS:
            return { ...state, userEdit: payload }
        case GET_ONE_USER_FAIL:
            return { ...state, errors: payload, loading: false }
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return ({ ...state, loading: false, errors: null, currentUser: {}, name: "hiii" })
        default:
            return state
    }
}
