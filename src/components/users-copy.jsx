import { useGlobalState } from "../context/global-context"

const UsersCopy = () => {
    const { users } = useGlobalState()
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
        </div>
    )
}

export default UsersCopy