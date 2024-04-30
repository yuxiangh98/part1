import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const App = () => {

  const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }          
  console.log(object2.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed
}

const Hello = (jj) => {

  console.log(jj)
  return (
    <div>
      <p>

        Hello {jj.name}, you are {jj.age} years old
      </p>
    </div>
  )
}

const footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
export default App