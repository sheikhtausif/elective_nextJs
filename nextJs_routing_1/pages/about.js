import Link from 'next/link';
import { withRouter } from 'next/router'
import styles from './style.module.css'


const About = () => {
    return (
        <>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">contact</Link>
            </div>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Welcome to About Page</h1>

        </>
    )
}

export default withRouter(About)
