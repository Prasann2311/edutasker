import React, { useState } from 'react';

const Logic = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className="absolute top-10 text-7xl font-bold text-emerald-600">EduTasker</h1>

        <div className="rounded-xl border-2 border-emerald-600 p-10">
          <h2 className="mb-5 text-xl font-semibold border-emerald-600 text-center ">Login</h2>

          <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center justify-center">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-2xl border-2 outline-none bg-transparent border-emerald-600 rounded-full py-2 px-6 placeholder:text-gray-400"
              type="email"
              placeholder="Enter your gmail"
            />

            <div className=" relative w-[93%] mt-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-2xl border-2 outline-none bg-transparent border-emerald-600 rounded-full py-2 px-6 placeholder:text-gray-400 w-full pr-12"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '❌' : '👁️'}
              </button>
            </div>

            <button className="mt-7 text-white text-lg border-none outline-none bg-emerald-600 rounded-3xl py-3 px-6 w-[30%]">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logic;



// import React, { useState } from 'react'

// const Logic = ({handleLogin}) => {


//   // console.log(handleLogin);
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const submitHandler = (e) => {
//         e.preventDefault()
//         handleLogin(email,password)

//         setEmail("")
//         setPassword("")
//     }


//     return ( 
//        <>
        
//       <div className = 'flex h-screen w-screen  items-center justify-center' >
       
//         <div className = 'rounded-xl border-2 border-emerald-600 p-20' >
// <h1 className='mb-10 items-center'>Log In </h1>
//         <form onSubmit = {
//             (e) => {
//                 submitHandler(e)
//             }
//         }
//         className = 'flex flex-col items-center justify-center' >

//         <input value = { email }
//         onChange = {
//             (e) => {
//                 setEmail(e.target.value)
//             }
//         }
//         required className = ' text-2xl border-2 outline-none bg-transparent border-emerald-600 rounded-full py-2 px-6 placeholder:text-gray-400 '
//         type = "email"
//         placeholder = 'Enter your gmail' />
//         <input value = { password }
//         onChange = {
//             (e) => {
//                 setPassword(e.target.value)
//             }
//         }
//         required className = ' text-2xl border-2 outline-none bg-transparent border-emerald-600 rounded-full py-2 px-6 mt-3 placeholder:text-gray-400 '
//         type = "password"
//         placeholder = 'Enter your password' />
//         <button className = 'mt-7 text-white text-lg border-none outline-none  bg-emerald-600 rounded-full py-3 px-6 w-full placeholder:text-white ' > Log in </button> 
//         </form > 
//         </div> </div >
//         </>
//     )
// }

// export default Logic
