import { useState } from 'react';
import Form from 'react-bootstrap/Form';
export default function Registration() {
    const [user , setUser]=useState({email:"", password:"" ,confirmPassword:"" ,number:"" , date:""})
    const [error , setError]=useState({emailError:"" , passwordError:"" ,confirmPasswordError:"" ,ErrorNumber:"" })
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const handleData = (a) => {
        setUser({
            ...user,
            [a.target.name]: a.target.value
        });
    }
    
const SubmitForm =(e)=>{
    e.preventDefault();
    const emailError = user.email === "" ? 'This input is required' :
    !/\S+@\S+\.\S+/.test(user.email) ? 'Please enter a valid email address' : '';

    const passwordError = user.password === '' ? 'This input is required' :
       !passRegex.test(user.password) ? 'Please enter a valid password' : '';

    const confirmPasswordError = user.confirmPassword === '' ? 'This input is required' :
    user.password !== user.confirmPassword ? 'Passwords do not match' : '';

    const ErrorNumber = user.number === "" ? 'This input is required' :
    !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(user.number) ? 'Please enter a valid phone number' : '';
setError({ emailError, passwordError, confirmPasswordError,ErrorNumber });


 
    if(emailError==='' && passwordError ==='' && confirmPasswordError==='' && ErrorNumber ==='' ){
    console.log(user);}
    
}
  return (
    <>
   <div>

    <Form onSubmit={SubmitForm}>
        <p>Registration Form</p>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control name='email' type="email" onChange={handleData} placeholder="Enter email" />
        <small>{error.emailError}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Control  name='number' type="tel" onChange={handleData} placeholder="Number" />
        <small>{ error.ErrorNumber}</small>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupDate">
        <Form.Control  name='date' type="date" onChange={handleData}  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control  name='password' type="password" onChange={handleData} placeholder="Password" />
        <small>{error.passwordError}</small>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Control  name='confirmPassword' type="password" onChange={handleData} placeholder="Confirm Password" />
       <small>{error.confirmPasswordError}</small>
      </Form.Group>
      


      <button type="submit">Submit</button>
    </Form>
    </div>


    </>
  )
}