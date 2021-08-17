import Link from 'next/link'
import styles from '../style.module.css'
import axios from 'axios'

export const getStaticPaths = async () => {

    let res = await axios.get(`https://reqres.in/api/users`)
    let { data } = res.data

    const paths = data.map(el => {
        return { params: { id: el.id.toString() } }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    let res = await axios.get(`https://reqres.in/api/users/${id}`)
    let { data } = res.data

    return {
        props: { user: data }
    }
}

const UserDetails = ({ user }) => {
    console.log('user:', user)

    return (
        <>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/users">Users</Link>
            </div>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>User Details</h1>
            <div className={styles.user}>
                <h2>Name: {`${user.first_name} ${user.last_name}`}</h2>
                <p>Email: {user.email}</p>
                <img src={user.avatar} alt="userImage" />
            </div>
        </>
    )
}

export default UserDetails
