// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import '../Styles/Auth.css'

function Login() {
  const navigate = useNavigate()

  const [email, setEMail] = useState("")
  const [password, setPassword] = useState("")


  const logIN = async () => {
    const users1 = { email, password }
    try {
      let loginUser = await fetch('http://localhost:5000/user/login', {
        method: "POST",
        body: JSON.stringify(users1),
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'bearss <token>'
        }
      })
      loginUser = await loginUser.json()
      console.log(loginUser)
      navigate('/')
    } 
    catch (e) {
      alert(e)
    }
  }


  return (
    <>
      <div className="logi" >
        < div className="form" >
          <p className="logo1"> <img src={"foodPanda"} width={"50%"} /> </p>
          <p className="logo"> Welcome Login</p>
          <input type="email" onChange={(e) => setEMail(e.target.value)} value={email} placeholder="Email" required="" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required="" />
          <button onClick={logIN} className="login">Log-In</button>
          <NavLink to={"/Forget"} className={"a"} >Forgot Password ?</NavLink>
          <hr />
          <NavLink to={"/SignUp"} className="create-account">Create New Account</NavLink>
        </div>
      </div>
    </>
  )
}

export default Login


