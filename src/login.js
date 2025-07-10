import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useNavigate } from 'react-router'; //to switch to other page after login
const Login=()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser=(e)=>{
        e.preventDefault();
        const data = {
            email:email,
            password:password
        };
        fetch('http://localhost:5000/user/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(response=>{
            if(response.ok){
                return response.json();
            }else{
                alert("Login failed");
            }
        }).then(data=>{
            if(data.message==="Invalid Credentials"){
                alert("Invalid credentials");
                return;
            }
            console.log("Login successful",data);
            localStorage.setItem('token',data.token);
            localStorage.setItem('firstname',data.data);
            navigate('/home');
        }).catch(err=>{
            console.log("error occured",err);
            alert("An error while logging into account")
        })
    }
    return(
        <div className="container">
            <h1>Login</h1>
            <hr/>
            <form>
                <div className="form-group">
                    <label>Email : </label>
                    <input type="email" className="form-control" placeholder="enter the email" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Password : </label>
                    <input type="password" className="form-control" placeholder="enter the password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
            </form>
        </div>
    )
}
export default Login;