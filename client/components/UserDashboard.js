import React from 'react'
import { useSelector } from 'react-redux'
import AdminProfile from './AdminProfile'
import UserProfile from './UserProfile'

const UserDashboard = (props) => {
  const email = useSelector((state) => state.auth.email)
  const { firstName, role } = useSelector((state) => state.auth)

  return (
    <div>
      <h3>
        Welcome
        {firstName
          ? ', ' + firstName + '!'
          : '! Use this page to log your information.'}
      </h3>
      {role === 'admin' ? <AdminProfile /> : <UserProfile />}
    </div>
  )
}

export default UserDashboard
