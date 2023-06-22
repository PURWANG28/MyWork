import React, { useState } from 'react';

function BasicFormValidation(props) {
    function loginHandler(e){

     if(user.length<3 || password.length<5){
        alert("Enter correct value")
     }
     else{
        alert("Welcome" )
     }


      e.preventDefault()
    }

const[user,setuser]=useState("")
const[password,setpassword]=useState("")

const[userErr,setuserErr]=useState(false)
const[passwordErr,setpasswordErr]=useState(false)


   function userHandler(e){
     let data= e.target.value
       
     if(data.length<3){
       setuserErr(true)
     }
     else
     {
        setuserErr(false)
     }

    setuser(data);
   }


   function passwordHandler(e){
    let data= e.target.value
      
    if(data.length<5){
      setpasswordErr(true)
    }
    else
    {
       setpasswordErr(false)
    }
     
    setpassword(data);

  }


    return (
        <>
        <form onSubmit={loginHandler}>
        <h1 className='text-dark'>Login Form</h1><br/><br/>
<input type='text' className='w-25 border-none bg-light'  placeholder='Enter your password' onChange={userHandler}/> 
      {userErr?<span className='d-inline-block  ml-3'>Minimum 3 character required</span>:<span></span> }
        <br/><br/>
        <input type='text' className='w-25 bg-light' placeholder='Enter your password'onChange={passwordHandler}/>  
        {passwordErr?<span className='d-inline-block  ml-3'>Password should be at least 5 character</span>:<span></span>}
         <br/><br/>
        <button  type='submit' className='w-25 pt-3 pb-3 btn bg-info text-light'>Submit</button>
        </form>
        </>
    );
}

export default BasicFormValidation;
