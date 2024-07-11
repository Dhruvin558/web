import React from "react";
import { Link } from "react-router-dom";
import { Form,FormGroup,Input,Label, } from 'reactstrap';
import Button from '@mui/material/Button';

const Login = ()=>{
    return(

        <div className="marg">
  <Form className="Form">
    <FormGroup floating className="Form">
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
    <Button variant="outlined">
    <Link to="/Home">Login</Link>
    </Button>
    {' '}
    <Button variant="outlined">
      <Link to="/Register">Sign Up</Link>
    </Button>
  </Form>
</div>
    )
}

export default Login ;