import  React,{useState,useEffect}  from 'react';
import fire from './fire';
import Login from './Login';
import './Appp.css';
import Hero from './Hero';
const Appp =()=>{
const [user,setuser]=useState("");
const [email,setemail]=useState("");
const [emailerror,setemailerror]=useState("");
const [password,setpassword]=useState("");
const [passworderror,setpassworderror]=useState("");
const [hasaccount,sethasaccount]=useState(false);

const handlelogin=()=>
{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err=>
        {
            switch(err.code)
            {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-find": 
                setemailerror(err.message);
                break;
                case "auth/wrong-password":
                    setpassworderror(err.message);
                    break;  
            }
        });
};
const clearInput=()=>
{
setemail("");
setpassword("");
}
const clearErrors=()=>
{
    setemailerror("");
    setpassworderror("");
}

const handleSignup=()=>
{
    clearErrors();

    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err=>
        {
            switch(err.code)
            {
                case "auth/email-already-in-use":
               
                case "auth/invalid-email": 
                setemailerror(err.message);
                break;
                case "auth/weak-password":
                    setpassworderror(err.message);
                    break;  
            }
        });

}
const logOut=()=>
{
    fire.auth().signOut();
}

const listener=()=>
{
    fire.auth().onAuthStateChanged( (user)=>
        {
            if(user)
            {
                clearInput();
                setuser(user);

            }
            else{
            setuser("");

            }
        })
}
useEffect(()=>
{
listener();
},[]);
return (
    <div className="App">
    {  user?
        (
            <Hero logOut={logOut}/>
        ):
        (
            <Login
            email={email}
             setemail={setemail}
             password={password} 
             setpassword={setpassword}
              handlelogin={handlelogin}
              handleSignup={handleSignup}
              hasaccount={hasaccount}
              sethasaccount={sethasaccount}
              emailerror={emailerror}
              passworderror={passworderror}
              />
              
              
        )
    }

          
    </div>
);

}
export default Appp 