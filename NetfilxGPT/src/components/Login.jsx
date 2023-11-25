import { useState } from "react";
import Header from "./Header";


const Login = () => {

 const [login,setLogin] = useState(true);


 const toggleSignInForm = () =>{
    setLogin(false)
 }
 const toggleSignupForm = () =>{
  setLogin(true)
}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      {
        login ? (
          <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="text-3xl font-bold py-4">Sign In</h1>
          <input
            type="email"
            name="email"
            id=""
            className="p-4 my-4 w-full text-white bg-gray-700 h-11"
            placeholder="Email or Username"
          />
          <input
            type="password"
            name="password"
            id=""
            className="p-4 my-4 w-full text-white bg-gray-700 h-11"
            placeholder="Password"
          />
          <button
            type="submit"
            className="p-2 my-6 bg-red-700 rounded-lg h-10 w-full text-white"
          >
            Sign In
          </button>
          <p className="py-4" onClick={toggleSignInForm}>New to Netflix? <span className="font-bold">SignUp</span> now</p>
        </form>


        ):(
          <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">Sign Up</h1>
        <input
          type="text"
          name="username"
          id=""
          className="p-4 my-4 w-full text-white bg-gray-700 h-11"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          id=""
          className="p-4 my-4 w-full text-white bg-gray-700 h-11"
          placeholder="Email or Username"
        />
        <input
          type="password"
          name="password"
          id=""
          className="p-4 my-4 w-full text-white bg-gray-700 h-11"
          placeholder="Password"
        />
        <button
          type="submit"
          className="p-2 my-6 bg-red-700 rounded-lg h-10 w-full text-white"
        >
          Sign In
        </button>
        <p className="py-4" onClick={toggleSignupForm}>Already SignUp? <span className="font-bold">Login</span></p>
      </form>




        )
      }



      
    </div>
  );
};

export default Login;
