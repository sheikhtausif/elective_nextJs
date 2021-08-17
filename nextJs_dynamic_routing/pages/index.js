import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styles from './style.module.css'


const Index = () => {
    return (
        <>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/users">Users</Link>
            </div>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Welcome to Home Page</h1>
        </>
    )
}

export default withRouter(Index)

/* Problem
Create a users list page
use dummy data to show a list of users in that
by clicking on each users id, create a single users page
show the users id and name inside the page, but do retrieve the id from the url and show it on the page */
