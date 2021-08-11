import React, { useState } from "react"
import api from './utils/api'

export const App = () => {

  const [password, setPassword] = useState('')
  console.log("🚀 ~ file: app.tsx ~ line 6 ~ App ~ password", password)
  const [email, setEmail] = useState('')
  console.log("🚀 ~ file: app.tsx ~ line 8 ~ App ~ email", email)


  const handleSubmit =  async (e: any) => {
    e.preventDefault()
    const res = await api.post('/login', {
      userName: email,
      password
    })
    console.log("🚀 ~ file: app.tsx ~ line 18 ~ handleSubmit ~ res", res)

  }

  const handleChange = (e: any) => {
    const value: string = e.target.value
    switch (e.target.id) {
      case 'pass':
        setPassword(value)
        break
      case 'email':
        setEmail(value)
        break
      default:
        break
    }
  }

  
  return (
  <div>
    <form action="POST" onSubmit={handleSubmit}>
      <label htmlFor="pass">password</label>
      <input type="text" id='pass' onChange={handleChange}/>
      <label htmlFor="pass">email</label>
      <input type="text" id='email' onChange={handleChange}/>
      <button type="submit">SUBMIT</button>
    </form>
    

  </div>)
}
