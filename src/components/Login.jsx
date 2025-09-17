import {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";

const Login = () => {

const [email, setEmailId] =useState("kalam@gmail.com");
const [password, setPassword] =useState("Kalam@123");
const[error , setError] = useState("")
const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogin = async (e) =>{
  
    e.preventDefault();
   try{const res= await axios.post( BASE_URL + "/login" ,
    {
        email,
        password,
    },
      {
        withCredentials: true, // 🔑 this allows cookies
      }
    );
    // console.log(res.data);
    dispatch(addUser(res.data));
     return navigate("/");
}  catch(err){
    setError(err?.response?.data|| "somethng went wrong");
   }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="card card-side bg-white shadow-xl rounded-2xl overflow-hidden w-[750px]">
        
        {/* Left side info */}
        <div className="w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Meet & Greet</h2>
          <p className="text-lg text-center">
            A place where people come together.  
            Connect, share, and grow with others.
          </p>
        </div>
        
        {/* Right side login form */}
        <div className="card-body w-1/2 flex flex-col justify-center p-8">
          <h2 className="card-title text-2xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-4">
            Login to continue your Meet & Greet journey
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={(e) => setEmailId(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="input input-bordered w-full"
               onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
             

            <button type ="button"
            className="btn btn-primary w-full mt-2" 
            onClick={handleLogin}>
              Login
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  
  );
};
export default Login;