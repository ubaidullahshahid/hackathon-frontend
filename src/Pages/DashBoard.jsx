import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCurrentUser } from '../Redux/Slices/CurrentUser';

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(clearCurrentUser())
    navigate("/login")
  }
  return (
    <div>DashBoard

      <button className='border-2 border-black mx-[20px]' onClick={handleLogout}>logout</button>
    </div>
  )
}

export default DashBoard