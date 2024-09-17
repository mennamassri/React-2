import { useState } from 'react';
import Form from 'react-bootstrap/Form';
export default function Login() {
    const [user , setUser]=useState({email:"", password:""})
    const [error , setError]=useState({emailError:"" , passwordError:""})
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const handleData =(a)=>{
        if (a.target.name =="email"){
            setUser({...user , email:a.target.value})
            
        
    } else {
        setUser({...user , password:a.target.value})
        
    }
   
}

const SubmitForm =(e)=>{
    e.preventDefault();
    const emailError = user.email === "" ? 'This input is required' :
    !/\S+@\S+\.\S+/.test(user.email) ? 'Please enter a valid email address' : '';

    const passwordError = user.password === '' ? 'This input is required' :
       !passRegex.test(user.password) ? 'Please enter a valid password' : '';

setError({ emailError, passwordError });


 
    if(emailError==='' && passwordError ===''  ){
    console.log(user);}
    
}
  return (
    <>
   
    <Form onSubmit={SubmitForm}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control name='email' type="email" onChange={handleData} placeholder="Enter email" />
        <small>{error.emailError}</small>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control  name='password' type="password" onChange={handleData} placeholder="Password" />
        <small>{error.passwordError}</small>
      </Form.Group>
      <button type="submit">Submit</button>
    </Form>



    </>
  )
}
