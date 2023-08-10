import React, { useEffect, useMemo, useRef, useState } from 'react'
import useSWR from 'swr';

const GlobalStateContext = React.createContext({ users: [], count: 0})
const fetcher = (url) => fetch(url).then((res) => {
    console.log("api called")
    res.json()
});

export function GlobalStateProvider(props){
    const { data: users, error, mutate: mutateUsers } = useSWR(
        "https://api.github.com/users",
        fetcher
    )

    const [count, setCount] = useState(0)
    const interval = useRef();

    useEffect(() => {
        interval.current = setInterval(() => {
            setCount(count => count+1)
        }, 1000)

        return () => {
            interval.current && clearInterval(interval.current)
        }
    }, [])

    const value = useMemo(() => ({users, error, mutateUsers, count}), [
        users,
        error,
        mutateUsers,
        count
    ])
    return <GlobalStateContext.Provider value={value} {...props}/>
}

export function useGlobalState(){
    const context = React.useContext(GlobalStateContext);

    if(!context){
        throw new Error("You need to wrap GlobalStateProvider");
    }

    return context;
}
