import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FriendsPropCard from './FriendsPropCard';
import './friendproplist.css'
import { getAllUsers } from '../../JS/actions/actionsUser';
import NavUser from '../topbar/NavUser';

const FriendPropList = () => {
  const dispatch=useDispatch()
   useEffect(() => {
    
  dispatch(getAllUsers())
   
  }, [])
  
  const fpList=useSelector(state=>state.userReducer.usersList)
  console.log(fpList)
  const currentUser = useSelector(state => state.userReducer.currentUser)
  
  return <div>
    <NavUser/>
    <div className='all'>
      {fpList.filter(el=>el._id!=currentUser._id).map(el=><FriendsPropCard  el={el} key={el._id}/>)}
      </div></div>
};

export default FriendPropList;
