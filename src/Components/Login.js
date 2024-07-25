import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, } from 'reactstrap';
import Button from '@mui/material/Button';

const Login = () => {
  return (
      <Form className="Form , marg">
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

        <div className="fform">
          <Button variant="outlined">
            <Link to="/Home">Login</Link>
          </Button>
          {' '}
          <Button variant="outlined">
            <Link to="/Register">Sign Up</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/Abc">Signbbbbb Up</Link>
          </Button>

        </div>
      </Form>


  )
}

export default Login;