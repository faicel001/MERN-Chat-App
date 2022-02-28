import {GET_ONE_USER_SUCCESS,GET_ONE_USER_FAIL,MODIFY_CURRENT_USER_SUCCESS,MODIFY_CURRENT_USER_FAIL, USER_SIGNUP_SUCCESS,GET_All_USERS_SUCCESS,GET_All_USERS_FAIL,USER_SIGNUP_LOADING, USER_SIGNUP_FAIL, USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS, GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS, LOGOUT_USER } from "../actionsTypes/constantsUser"
import axios from "axios"

export const registerUser = (newUser, navigate) => async dispatch => {
    dispatch({ type: USER_SIGNUP_LOADING })
    try {
        const response = await axios.post("http://localhost:7000/api/auth/register", newUser)
        console.log(response);
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: response.data })
        navigate("/signin")
    } catch (error) {
        console.dir("error", error)
        dispatch({ type: USER_SIGNUP_FAIL, payload: error })
    }
}

export const loginUser = (loggedUser, navigate) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:7000/api/auth/login", loggedUser)
        console.log(response);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: response.data })
        if (response.data.user.role == "admin") { navigate("/dashboardAdmin") }
        else{
            navigate("/dashboard")
        }
    } catch (error) {
        console.dir(error)
        dispatch({ type: USER_SIGNIN_FAIL, payload: error })
    }
}

export const getCurrentUser = () => async dispatch => {
    try {
        const opts = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        const response = await axios.get(`http://localhost:7000/api/auth/current`, opts)
        dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: response.data.user })
    } catch (error) {
        console.dir(error)
        dispatch({ type: GET_CURRENT_USER_FAIL, payload: error })
    }
}
export const getAllUsers = () => async dispatch => {
    dispatch({ type: USER_SIGNUP_LOADING })

    try {
        const opts = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        const response = await axios.get("http://localhost:7000/api/auth/allUsers",opts)
        dispatch({ type: GET_All_USERS_SUCCESS, payload: response.data.allUsers })
    } catch (error) {
        dispatch({ type: GET_All_USERS_FAIL, payload: error })
    }

}
export const followUser = (id) => async dispatch => {
   
        const opts = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
    try {
        const response = await axios.put(`http://localhost:7000/api/users/follow`,id,opts)
        dispatch({ type: MODIFY_CURRENT_USER_SUCCESS, payload: response.data })
        dispatch(getAllUsers())
        
    } catch (error) {
        dispatch({ type: MODIFY_CURRENT_USER_FAIL, payload: error })
    }

}
export const unFollowUser = (id) => async dispatch => {
   
    const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
try {
    const response = await axios.put(`http://localhost:7000/api/users/unfollow`,id,opts)
    dispatch({ type: MODIFY_CURRENT_USER_SUCCESS, payload: response.data })
    dispatch(getAllUsers())
    
} catch (error) {
    dispatch({ type: MODIFY_CURRENT_USER_FAIL, payload: error })
}

}
export const detailUser = (id,edituser,navigate) => async dispatch => {
   
    const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
try {
    const response = await axios.put(`http://localhost:7000/api/users/updateUser`,edituser,opts)
    dispatch({ type: MODIFY_CURRENT_USER_SUCCESS, payload: response.data })
    dispatch(getAllUsers())
    dispatch(getCurrentUser(id))
    navigate('/dashboard')
} catch (error) {
    dispatch({ type: MODIFY_CURRENT_USER_FAIL, payload: error })
}

}
export const getOneUser = (id) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:7000/api/users/getUser/${id}`)
        dispatch({ type: GET_ONE_USER_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_ONE_USER_FAIL, payload: error })
    }

}
export const logoutUser = () => {
    return { type: LOGOUT_USER }
}