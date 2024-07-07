import React from "react";
import { Link } from "react-router-dom";
import { Button,Form,FormGroup,Input,Label, } from 'reactstrap';


const Login = ()=>{
    return(

        <>
  <Form className="Form">
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button>
    <Link to="/Home">Login</Link>
    </Button>
    {' '}
    <Button>
      <Link to="/Register">Sign Up</Link>
    </Button>
  </Form>
</>
    )
}

export default Login ;