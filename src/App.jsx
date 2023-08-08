import { useState } from 'react'
import { GlobalStateProvider } from './context/global-context'
import './App.css'
import Count from './components/count'
import Users from './components/users'
import UsersCopy from './components/users-copy'

function App() {
  return (
    <GlobalStateProvider>
      <h1>Vite + React</h1>
      <Count />
      <Users />
      <UsersCopy />
    </GlobalStateProvider>
  )
}

export default App
