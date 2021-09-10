import React,{useState} from 'react'
import axios from 'axios'

function Login(){

    const[username,setusername] = useState('')
    const[password,setpassword] = useState('')
    const[login,setlogin]=useState(false)

    const login_info = {
        login:{
            username:username,
            password:password
        }
    }

    function submit_login_form(event){
        event.preventDefault();
        axios.post('/api/login',login_info)
            .then((response) =>{
                console.log(response);
                if(response.data.result==true){
                    setlogin(true);
                    alert("Login Successfull")
                }
            }).catch((error)=>{
                console.log(error);
            })
        }

    return <div>
        { 
        (login == true) ?
        <h1>Login Succcessfull</h1>
        :
          <form>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" required  value={username} onChange={(event) => setusername(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required value={password} onChange={(event) => setpassword(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" type="submit" onClick={submit_login_form}>Login</button>
                <p className="forgot-password text-right">
                    Dont have any account <a href="./signin">Sign in </a>
                </p>
            </form>
    }
    </div>
}

export default Login;