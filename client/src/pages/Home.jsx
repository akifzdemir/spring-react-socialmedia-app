import React, { useContext } from 'react'
import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import AuthContext from '../context/AuthContext'

function Home() {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Nav />
            <ProfileCard firstName={user.name} lastName={user.lastName}  />
        </>
    )
}

export default Home