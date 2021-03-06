import React,{useState} from 'react'
import axios from 'axios'

function Signup(){

    function logout(event) {
        event.preventDefault();
       window.location = 'http://localhost:5000/';
      }

    const[firstname,setfirstname] = useState('')
    const[lastname,setlastname] = useState('')
    const[email,setemail] = useState('')
    const[username,setusername] = useState('')
    const[password,setpassword] = useState('')
    const[signed,setsigned] = useState(false)

    const user_info = {
        profile:{
            username:username,
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password
        }
    }

    function submit_form(event){
        event.preventDefault();
        axios.post('/api/signup',user_info)
            .then((response) =>{
                console.log(response);
                if(response.data.result==true){
                    setsigned(true);
                    alert("Signup Successfull")
                }
            }).catch((error)=>{
                console.log(error);
            })
        }

    return <div>
        {
         (signed==true)?
         <div>
            <h1>Signup Successfull!!!!!</h1>
            <button onClick={logout}>LogOut</button>
         </div>:
          <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" required value={firstname} onChange={(event) => setfirstname(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" required value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" required value={username} onChange={(e)=>setusername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" required value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required value={password} onChange={(e)=>setpassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" type="submit" onClick={submit_form}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./login">log in?</a>
                </p>
            </form>
    }
    </div>
}

export default Signup;