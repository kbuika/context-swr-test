import { useGlobalState } from "../context/global-context"

const Count = () => {
    const { count } = useGlobalState()
    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default Count