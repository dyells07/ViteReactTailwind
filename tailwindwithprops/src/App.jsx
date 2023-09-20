import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  let myObj = {
    username: "dyells",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
    <Card username="bipin" object={myObj} />
    <Card username="dyells" btnText="click me" />
    </>
  )
}

export default App
