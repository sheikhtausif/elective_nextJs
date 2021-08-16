import Link from 'next/link';
import { withRouter } from 'next/router'
import styles from './style.module.css'

const Contact = () => {
    return (
        <>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Welcome to Contact Page</h1>

        </>
    )
}

export default withRouter(Contact)
