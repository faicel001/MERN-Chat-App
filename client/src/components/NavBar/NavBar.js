import * as React from 'react';
import Button from '@mui/material/Button';
import './navbar.css'
import "../topbar/NavUser";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../../JS/actions/actionsUser";
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return <div>
        
        <div className='main'>

            <h1 className="home-title">
                <span style={{color:"black"}}>WELCOME TO AnoSpace! </span>
                <span style={{color:"black"}}>you want to join our community of anonyme chat web cite?</span>
                <span style={{color:"black"}}>it is very easy .. just sign up below with you fake inforamtion and enjoy :D </span>
                <br /><br/>
                <Button style={{color:"black"}} color="inherit" onClick={() => { navigate("/signin"); dispatch(logoutUser()) }}>sign in</Button>
                <Button style={{color:"black"}} color="inherit" onClick={() => { navigate("/signup"); dispatch(logoutUser()) }}>sign up</Button>
                <br /><br/>
                <span style={{color:"black"}}>have a good day. </span>


            </h1></div></div>


};

export default NavBar;
