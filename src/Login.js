import React from "react";
import Hero from "./Hero";
 const  Login=(props)=>
 {

          const {email,setemail,password,setpassword,handlelogin,handleSignup,hasaccount,sethasaccount,emailerror,passworderror}=props;

    return (
        <section className="login">
            <div className="loginContainer">
                
                <label>UseName</label >
                <input type="text" autoFocus required value={email} onChange={e=>setemail(e.target.value)}/>
                <p className="errorMsg">{emailerror}</p>
                
                <label>Password</label >
                <input type="password" 
                 required 
                 value={password} 
                 onChange={e=>setpassword(e.target.value)}
                 />
                <p className="errorMsg">{passworderror}</p>
                <div  className="btnContainer">
                    {hasaccount?(
                        <>
                        <button onClick={handlelogin}> Sign in</button>
                        <p> Dont't have a account? <span onClick={()=>sethasaccount(!hasaccount)}> Sign up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}> Sign up</button>
                        <p> Have an account ? <span  onClick={()=>sethasaccount(!hasaccount)} > Sign in</span></p>
                        </>
                    )}
                </div>
            </div>

        </section>
    );
 }
 export default Login;