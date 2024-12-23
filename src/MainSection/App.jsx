import { useState } from 'react'
import reactLogo from '../assest/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
    return (
        <button>Я кнопка</button>
    );
}

function App() {
  return (
      <>
          <h1>It's my first React-App</h1>
          <MyButton />
          <img className="avatar" alt=""/>
      </>
  )
}

export default App
