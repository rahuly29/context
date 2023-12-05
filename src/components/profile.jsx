import React, { useContext } from 'react'
import userContext from '../context/context'

const Profile = () => {

    const {user} = useContext(userContext)

    return user ? <div className='profile'>Welcome {user.username}</div> : <div className='profile'>Please Login</div>
}

export default Profile