// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink, } from "react-router-dom"
import '../Styles/Auth.css'

function SignUP() {
  const [email, setEMail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  // const [lastName, setLastName] = useState("")


  const resgisterAcct = async () => {
    const users = { email, password, fullName }
    let resgistration = await fetch('http://localhost:5000/user/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'authorization': 'bears <token>'
      },
      body: JSON.stringify(users),

    })
    resgistration = await resgistration.json()
    console.log(resgistration)
    setEMail("")
    setFullName("")
    // setLastName("")
    setPassword("")

  }

  return (
    <>

      < div className="form" >
        <p className="logo1"> <img src={"foodPanda"} width={"50%"} /> </p>
        <p className="logo">SignUP</p>
        <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder="Full Name" required="" />
        {/* <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last Name" required="" /> */}
        <input type="email" onChange={(e) => setEMail(e.target.value)} value={email} placeholder="Email" required="" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required="" />
        <button onClick={resgisterAcct} className="login">Sign-UP</button>
        <hr />
        <NavLink to={"/Login"} className="login">Go To Login Page</NavLink>
      </div>

    </>
  )
}

export default SignUP


