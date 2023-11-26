import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";


const Login = () => {

 const [login,setLogin] = useState(true);
 const email = useRef(null);
 const password = useRef(null);
 const [errorMessage,setErrorMessage] = useState(null);

 const toggleSignInForm = () =>{
    setLogin(!login)

 };

 const handleClickButton = ()=>{
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message)
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

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="text-3xl font-bold py-4">{login? "SignIn":"SignUp"}</h1>
        { !login && 
         (
         <input
           type="text"
           name="username"
           
           className="p-4 my-4 w-full text-white bg-gray-700 h-11"
           placeholder="Username"
         />)
        
        }
          
          <input
            type="email"
            name="email"
            ref={email}
            
            className="p-4 my-4 w-full text-white bg-gray-700 h-11"
            placeholder={login?"Email or Username":"Email"}
          />
          <input
            type="password"
            name="password"
            
            ref={password}
            className="p-4 my-4 w-full text-white bg-gray-700 h-11"
            placeholder="Password"
          />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <button
            type="submit"
            className="p-2 my-6 bg-red-700 rounded-lg h-10 w-full text-white"
            onClick={handleClickButton}
          >
           {login? "SignIn":"SignUp"}
          </button>
          {
            login? (
              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                New to Netflix? <span className="font-bold"> SignUp</span>
              </p>
            ):(
              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                Already registered?<span className="font-bold"> SignIn</span>
              </p>
            )
          }
          
        </form>

      


      
    </div>
  );
};

export default Login;


