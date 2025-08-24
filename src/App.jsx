
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import AdminDeshboard from './Components/Deshboard/AdminDeshboard'
import EmployeeDeshboard from './Components/Deshboard/EmployeeDeshboard'
import { AuthContext } from './Context/AuthProvider'

function App() {
  // useEffect(() => {
  //   // setLocalstorage()
  //   getLocalstorage()
  // },);
  const [user, setUser] = useState([]);

    const Authdata=useContext(AuthContext)

    useEffect(() => {
      if(Authdata){
      const loggedInuser=localStorage.getItem("loggedInuser")
      if(loggedInuser){
        setUser(loggedInuser.role)
      }
      }
    }, [Authdata]);
  // Authdata && Authdata.Employess.find((e)=>email==e.email && password==e.password)

  const handlelogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInuser',JSON.stringify({role:'Admin'}))
    } else if(email=='Employee@me.com' && password=='123'){
      setUser('employee')
            localStorage.setItem('loggedInuser',JSON.stringify({role:'Employess'}))

    }else{
      alert("Bhag Mc")
    }
  }






  return (
    <>
    {!user ? <Login handlelogin={handlelogin} /> : ''}
     {user=='admin'?<AdminDeshboard/>:<EmployeeDeshboard/>}
     

    </>
  )
}

export default App
