import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function Admin() {
    return (
        <div className='vh-100 d-flex'>
            <SideBar />
            <div className='p-5 vh-100 overflow-custom flex-grow-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Admin