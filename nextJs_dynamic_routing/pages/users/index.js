import Link from 'next/link';
import axios from 'axios';
import styles from '../style.module.css'

export const getStaticProps = async () => {

    let res = await axios.get(`https://reqres.in/api/users`)
    let { data } = res.data

    return {
        props: { users: data }
    }
}

const Users = ({ users }) => {
    console.log('users:', users)
    return (
        <div className={styles.users}>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/users">Users</Link>
            </div>
            <h1 style={{ textAlign: 'center' }}>Users</h1>
            {users.map((el) => (
                <ol key={el.id}>
                    <Link href={`/users/${el.id}`}>
                        <a>{el.first_name}</a>
                    </Link>
                </ol>
            ))}
        </div>
    )
}

export default Users