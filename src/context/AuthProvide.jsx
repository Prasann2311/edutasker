import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'


export const AuthContext= createContext()
const AuthProvide = ({children}) => {
  // localStorage.clear()
    const [userdata, setUserData] = useState(null)
            const data = getLocalStorage()

           useEffect(() => {
            setLocalStorage()
            const {employees}=getLocalStorage()
            setUserData(employees)
           
             
           }, [])
           
  return (
    <div>
        <AuthContext.Provider value={[userdata,setUserData]}>
        {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvide
