import React from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h2>User 1 <button onClick={() => navigate('1')}>View User Details</button></h2>
                <h2>User 2 <button onClick={() => navigate('2')}>View User Details</button></h2>
                <h2>User 3 <button onClick={() => navigate('3')}>View User Details</button></h2>
                <h2>Admin<button onClick={() => navigate('admin')}>View User Details</button></h2>
            </div>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
            }
        </>
    )
}

export default Users