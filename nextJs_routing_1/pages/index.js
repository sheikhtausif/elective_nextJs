/* Problem
Add multiple pages to the next.js app
Create the home, about, contact us, and other forms
style out the pages as well use a mix of style JSX + CSS with it */

import Link from 'next/link';
import { withRouter } from 'next/router';
import styles from './style.module.css'


const Index = () => {
    return (
        <>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Welcome to Home Page</h1>
        </>
    )
}

export default withRouter(Index)