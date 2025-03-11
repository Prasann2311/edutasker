import React, { useContext, useEffect, useState } from 'react'
import Logic from './components/Auth/Logic'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { AuthContext } from './context/AuthProvide'
import { data } from 'autoprefixer'
// import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userData, setUserData] = useContext(AuthContext)
 
useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  // console.log(loggedInUser);
  if(loggedInUser){
    // console.log("user logged in hai");
    const userData = JSON.parse(loggedInUser)
   setUser(userData.role)
   setLoggedInUserData(userData.data)
  }
 },[])

const handleLogin=(email, password)=>{
if(email== 'admin@me.com' && password=='123'){
  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
}else if(userData){
  const employee = userData.find((e)=>email== e.email && password == e.password)
  if(employee){
    setUser('employee')
    setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
  }

}else{
  alert("invalid credentials")
}
  // console.log(email,password)

}
// handleLogin('admin@me.com', '123') 
 
  return (
    <> 
    {!user ? <Logic  handleLogin={handleLogin}/>: ''}
 {user == 'admin'? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData}/>:null)}
    </>
  )
}

export default App
